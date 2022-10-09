import {printer} from "../app.component";
import {FormControl, Validators} from "@angular/forms";


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



export function totalSize(files:Array<File>){
  return files.reduce((sum,file)=> sum + file.size,0);
}


export class ApplicationHelper {


  constructor() {
  }

  onFilesSelected(event: any) {
    printer(event.target.files);
  }

  onFolderSelected(event:any){
    printer("Folders");
    printer(event.target.files);
  }


  onFilesDropped(event:any){
    printer(event.dataTransfer.files);

    this._droppedFiles(event);
  }

  private _droppedFiles(event:any){
    processFilesDropped(event.dataTransfer.items).then((files:any)=>{
      printer("Files Dropped");
      printer(files);

      if(files.length >=100){
        printer("Huge Files Exception");
      }

      printer(totalSize(files))


    });
  }

  validEmail(value:string){
    let email = new FormControl(value,[Validators.email]);
    return email.valid;
  }


}
