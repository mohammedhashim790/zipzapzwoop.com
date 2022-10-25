import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AppState} from "../../../Bloc/Application/AppState";
import {Application} from "../../../Bloc/Application/Application";
import {printer} from "../../../app.component";
import {ApplicationHelper} from "../../../Bloc/Application/ApplicationHelper";
import {TooltipDirective, TooltipParams} from "../../../Bloc/Directives/Tooltip/tooltip.directive";
import {getCurrentUser, SignOut} from "../../../Bloc/Signer/SignInHelper";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends ApplicationHelper implements OnInit {
  private dragZoneElement: HTMLDivElement | undefined;

  @ViewChild("z3DropZone") dropZone!:ElementRef;

  @ViewChild("filesError") filesError!:TooltipDirective;

  tooltipParams:TooltipParams = {
    tooltipText: "Oops... That's a big file buddy. Sign up to get 1 GB free.",
    tooltipAlign:"right",
    dismissIn:10 * 100
  }


  get SignedIn(){
    return getCurrentUser();
  }


  @HostListener("dragover", ["$event"])
  onDragOver(event: any) {
    // printer("Drag Over");
    event.preventDefault();

    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  // @HostListener("dragleave", ["$event"])
  onDragLeave(event: any) {
    // printer("Drag Leave");
    this.RemoveDragZoneElement();
    event.preventDefault();

    event.stopImmediatePropagation();
    event.stopPropagation();

  }



  @HostListener("dragenter", ["$event"])
  onDragEnter(event: any) {
    // printer("drag Enter");
    this.CreateDragZoneElement();
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();

  }



  @HostListener('drop', ['$event'])
  onDrop(event: any) {

    this.CreateDragZoneElement();
    this.RemoveDragZoneElement();
    event.preventDefault();


    event.stopImmediatePropagation();
    event.stopPropagation();


    this.onFilesDropped(event).then((res)=>{
      printer("Dropped Successfully");
      // printer(res);
      try{
        this.appSession.AddToFiles(res);
      }catch (e:any){
        this.tooltipParams = {
          tooltipAlign:"right",
          tooltipText:e.message
        }
        this.filesError.Show();
      }

    }).catch((error)=>{
      printer("Error while Dropping");
      printer(error);
      this.filesError.Show();
    });

    return false
  }




  AppState = AppState;

  constructor(
    private elementRef:ElementRef,
    public application:Application,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private http:HttpClient
  ) {
    super();
    printer(this.application.firstTime);

    // document.documentElement.ondragenter = (event)=>{
    //   printer("Body Drag Start");
    //   this.onDragEnter(event);
    // }
    //


    printer()
    if(this.router.url.startsWith('/download')){
      this.application.DownloadSlide();
    }

  }

  ngOnInit(): void {
  }


  private CreateDragZoneElement(){

    this.dropZone.nativeElement.setAttribute("style",
      "visibility: visible;" +
      "display: flex;");
  }

  private RemoveDragZoneElement(){

    this.dropZone.nativeElement.setAttribute("style","visibility: hidden;" +
      "display: none;");
  }


  SignOut() {
    SignOut().finally(()=>{
      window.location.reload();
    })
  }

  TestClick() {
    let params = {
      requestType:"AC",
      emailId: "mohammedhashim790@gmail.com",
      sessionId: this.appSession.sessionId
    }

    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', 'origin');

    return this.http!.post(environment.emailApi, JSON.stringify(params), {
      headers: httpHeaders,
    }).toPromise().then((response)=>{
      printer(response);
    }).catch((res)=>{
      printer("error");
      printer(res);
    })
  }



}
