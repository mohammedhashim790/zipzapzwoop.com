import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


export interface OkayCancelDialogParams {
  title:string;
  content:string;
  onOkay?:()=>any;
  onCancel?:()=>any;
}


@Component({
  selector: 'app-okay-cancel',
  templateUrl: './okay-cancel.component.html',
  styleUrls: ['./okay-cancel.component.css']
})
export class OkayCancelComponent implements OnInit {


  constructor(
    private dialogRef:MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
      public dialogParams:OkayCancelDialogParams
  ) {
    this.dialogRef.afterClosed().subscribe((res)=>{
      dialogParams.onOkay!();
    })
  }

  ngOnInit(): void {
  }

}
