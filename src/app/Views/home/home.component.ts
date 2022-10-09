import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AppState} from "../../Bloc/Application/AppState";
import {Application} from "../../Bloc/Application/Application";
import {printer} from "../../app.component";
import {ApplicationHelper} from "../../Bloc/Application/ApplicationHelper";
import {TooltipDirective, TooltipParams} from "../../Bloc/Directives/Tooltip/tooltip.directive";
import {getCurrentUser, SignOut} from "../../Bloc/Signer/SignInHelper";

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
  }

  // @HostListener("dragleave", ["$event"])
  onDragLeave(event: any) {
    // printer("Drag Leave");
    this.RemoveDragZoneElement();
    event.preventDefault()
  }



  @HostListener("dragenter", ["$event"])
  onDragEnter(event: any) {
    // printer("drag Enter");
    this.CreateDragZoneElement();
    event.preventDefault()
  }



  @HostListener('drop', ['$event'])
  onDrop(event: any) {

    this.CreateDragZoneElement();
    this.RemoveDragZoneElement();

    event.stopImmediatePropagation();

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
    public application:Application
  ) {
    super();
    printer(this.application.firstTime);

    document.documentElement.ondragenter = (event)=>{
      printer("Body Drag Start");
      this.onDragEnter(event);
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
}
