import {printer} from "../../app.component";
import {FormControl, Validators} from "@angular/forms";
import {Session} from "./Session";
import {Application} from "./Application";
import {AppState} from "./AppState";
import {totalSize} from "./Constants";
import {getCurrentUser} from "../Signer/SignInHelper";
import {TransferConstants} from "./TransferFiles";



export var filePathKey = (file: File)=>{
  return (
    file.webkitRelativePath == "")?file.name:file.webkitRelativePath;
}



function processFilesDropped(dataTransferItems:any) {
  function traverseFileTreePromise(item:any, path='') {
    return new Promise( resolve => {
      if (item.isFile) {
        item.file((file: any) => {
          file.filepath = path + file.name //save full path
          files.push(file)
          resolve(file)
        });
      } else if (item.isDirectory) {
        let dirReader = item.createReader()
        dirReader.readEntries((entries: any) => {
          let entriesPromises = []
          for (let entry of entries)
            entriesPromises.push(traverseFileTreePromise(entry, path + item.name + "/"))
          resolve(Promise.all(entriesPromises))
        });
      }
    })
  }

  let files:Array<any> = [];
  return new Promise((resolve, reject) => {
    let entriesPromises = []
    for (let item of dataTransferItems)
      entriesPromises.push(traverseFileTreePromise(item.webkitGetAsEntry()))
    Promise.all(entriesPromises)
      .then(entries => {
        resolve(files)
      })
  })
}


export function TransferExpiry(){
  return ConvertToEpochInSeconds((addDate(new Date(),TransferConstants.expiryDate()).getTime()));
}

function ConvertToEpochInSeconds(value:number){
  return Math.floor(value/1000);
}
function addDate(date1:Date ,date2:Date | number){
  if(date2 instanceof Date){
    date1.setDate(date1.getDate() + date2.getDate());
  }else{
    date1.setDate(date1.getDate() + date2);
  }
  return date1;
}


export class ApplicationHelper {


  get CurrentUser(){
    return getCurrentUser();
  }


  public appSession = Session.GetInstance();


  constructor() {

  }

  onFilesSelected(event: any) {
    printer(event.target.files);

    this.appSession.AddToFiles(event.target.files);

  }

  RemoveFile(fileIndex:number){
    printer("Removing " + fileIndex);
    this.appSession.Remove(fileIndex);
  }

  onFolderSelected(event:any){
    printer("Folders");
    printer(event.target.files);
    this.appSession.AddToFiles(event.target.files);
  }


  async onFilesDropped(event: any) {
    printer(event.dataTransfer.files);

    return await this._droppedFiles(event);
  }

  private async _droppedFiles(event: any) {
    let result = await processFilesDropped(event.dataTransfer.items);
    return result;
  }

  validEmail(value:string){
    let email = new FormControl(value,[Validators.email]);
    return email.valid;
  }

  RemoveRecipient(index: number) {
    this.appSession.form.recipients.splice(index,1);
  }

}
