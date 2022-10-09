import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Application} from "../../../Bloc/Application/Application";
import {printer} from "../../../app.component";
import {ApplicationHelper} from "../../../Bloc/Application/ApplicationHelper";

@Component({
  selector: 'transfer-upload',
  templateUrl: './transfer-upload.component.html',
  styleUrls: ['./transfer-upload.component.css']
})
export class TransferUploadComponent extends ApplicationHelper implements OnInit,OnDestroy {


  @ViewChild("cancelContainer") cancelContainer!:ElementRef;
  @ViewChild("cancelAcknowledge") cancelAcknowledge!:ElementRef;
  private countdown: NodeJS.Timeout;




  get progress(): number {
    return this._progress;
  }

  set progress(value: number) {
    this._progress = value;
  }


  get progressCompleted(){
    return ((565.2 - this.progress) / 565.2) * 100;
  }


  private _progress:number = 565.2;


  constructor(
    private application:Application,
    ) {
    super();
    this.countdown = setInterval(()=>{
      if(this.progress <= 0){
        this.application.nextSlide();
      }
      this.progress--;
    },5);

  }

  ngOnInit(): void {

    printer("Form Values");
    printer(this.appSession.form);

  }

  ngOnDestroy() {
    clearInterval(this.countdown);
    printer("TransferCompleted Destroyed");
  }


  Cancel(){
    this.cancelContainer.nativeElement.style.display = "none";
    this.cancelAcknowledge.nativeElement.style.display = "flex";
  }

  ResumeTransfer(){
    this.cancelContainer.nativeElement.style.display = "flex";
    this.cancelAcknowledge.nativeElement.style.display = "none";
  }

  DropTransfer(){
    this.cancelContainer.nativeElement.style.display = "flex";
    this.cancelAcknowledge.nativeElement.style.display = "none";

    this.application.ToggleSelectFilesState();

  }

}
