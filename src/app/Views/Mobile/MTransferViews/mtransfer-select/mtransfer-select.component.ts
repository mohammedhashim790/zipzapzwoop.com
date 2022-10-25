import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {printer} from "../../../../app.component";
import {AppState} from "../../../../Bloc/Application/AppState";
import {Application} from "../../../../Bloc/Application/Application";
import {ApplicationHelper} from "../../../../Bloc/Application/ApplicationHelper";
import {TooltipDirective, TooltipParams} from "../../../../Bloc/Directives/Tooltip/tooltip.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'mtransfer-select',
  templateUrl: './mtransfer-select.component.html',
  styleUrls: ['./mtransfer-select.component.css']
})
export class MTransferSelectComponent extends ApplicationHelper implements OnInit {

  @ViewChild("filesError") filesError!:TooltipDirective;

  option:AppState = AppState.MAIL_SELECT;

  AppState = AppState;
  tooltipParams:TooltipParams = {
    tooltipText: "Sign Up to get 1 GB free.",
    tooltipAlign:"top",
  }

  get limit(){
    return this.appSession.transferFiles.FILE_SIZE_LIMIT();
  }

  constructor(
    private router:Router,
    private application:Application
  ) {
    super();

  }

  ngOnInit(): void {
  }

  Submit(){

  }

  override onFilesSelected(event: any) {
    try{
      super.onFilesSelected(event);
    }catch (e:any){
      this.tooltipParams = {
        tooltipAlign:"top",
        tooltipText:e.message
      }
      this.filesError.Show();
    }
  }

  Next() {
    this.router.navigateByUrl('option')
  }
}
