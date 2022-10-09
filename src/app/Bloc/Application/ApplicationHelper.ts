import {printer} from "../../app.component";
import {FormControl, Validators} from "@angular/forms";
import {Session} from "./Session";
import {Application} from "./Application";
import {AppState} from "./AppState";
import {totalSize} from "./Constants";





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



export class ApplicationHelper {



  public appSession = Session.GetInstance();


  constructor() {
  }

  onFilesSelected(event: any) {
    printer(event.target.files);

    this.appSession.AddToFiles(event.target.files);

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



}
