import {Injectable} from "@angular/core";
import {Storage} from "aws-amplify";
import { v4 as uuidv4 } from 'uuid';
import {environment} from "../../../environments/environment";
import * as JSZip from "jszip";
import {printer} from "../../app.component";



// export enum StorageProcess{
//   QUEUED,
//   READY_TO_SYNC,
//   SYNCED,
//   AVAILABLE_TO_QUEUE,
//   COMPRESSING_OBJECTS,
//   SYNCING
// }


export class StorageHelper {

  totalSize: number = -1;


  totalInBytes:number = 0;
  current:number = 0;

  currentInBytes:number = 0;

  iterProgress:number = 0;
  filesCompressed = -1;
  totalFiles = -1;
  private fileProgress: Array<number> = [];


  get TotalProgress(){
    return this.current;
    // return this.fileProgress.reduce((num,value)=>num + value,0);
  }

  onCompleteCallback: any;

  get api(): string {
    return environment.apiKey;
  }


  public getCurrentProgress(){
    return this.current;
  }

  public getSumProgress(){
    return this.fileProgress.reduce((sum,value)=>sum+value,0);
  }


  public getKey(sessionID:string,key:string) {
    /**
     * private :
     *    res/private/username/{key}
     *
     *  public
     *    res/public/{key}
     */
    // return "res/" + "public/" + uuidv4();

    return "res/" + "public/" + sessionID + "/"+key;
  }

  public getEmbeddedURL(sessionID:string,key:string){
    return this.api + this.getKey(sessionID,key);
  }


  public async UploadObject(
    key: string,
    file: File | string | null | ArrayBuffer,
    iter: number) {
    try {
      let res = await Storage.put(key, file, {
        completeCallback:(event)=>{
          printer("Uploaded" + key);
        },
        progressCallback : (progress: any) =>{
          // this.current=((this.iterProgress) + (progress.loaded/progress.total));
          // this.current=((this.iterProgress) + progress.loaded);

          if((this.current - this.iterProgress)<progress.loaded){
            this.current=((this.iterProgress) + progress.loaded);
          }

          this.fileProgress[iter] = progress.loaded;
          // printer(this.current);
        },
      });
      this.iterProgress = this.current;
      printer("Uploaded File " + key + "Progress " + this.iterProgress);
    } catch (e) {
      console.error(e);
      throw new Error(e as string);
    }

  }

  public DownloadObject(key:string){

    // key = this.getKey("fca4f9a6-df61-4ed2-88e7-44f46606fe8b/154-1542390_software-application-icon-png.png","");
    return Storage.get("");
  }

  /**
   * 1. Get Files
   * 2. If Single Zip, Proceed to step 4
   * 3. Compress Object
   * 4. Upload Object
   * @param files
   * @param sessionId
   * @constructor
   */
  public async UploadObjects(files: Array<File>,
                              sessionId:string) {
    // this.storageState = StorageProcess.QUEUED;
    this.reset();
    this.totalInBytes = files.reduce((value, file) => value + file?.size, 0);
    printer(this.totalInBytes);
    this.fileProgress = Array(files.length).fill(0);

    this.totalSize = files.reduce((num:number,file:File)=> num + file.size,0);

    printer("Files " + files.length );
    printer("Total Size " + this.totalSize);

    files = files.flat();
    if(files.length == 1){
      let file = files[0];
      let key = this.getKey(sessionId,file.name);
      // let key = this.filePathKey(file);
      await this.UploadObject(key, file, 0);
      return sessionId;
    }
    this.iterProgress = 0;
    for (let iter = 0; iter < files.length; iter++) {
      let file = files[iter];
      let key = this.getKey(sessionId,file.name);
      // let key = this.filePathKey(file);
      await this.UploadObject(key, file,iter);

    }
    return sessionId;
  }


  reset(){
    this.totalInBytes = 0;
    this.current = 0;
    this.currentInBytes = 0;
    this.iterProgress = 0;
    this.filesCompressed = -1;
    this.totalFiles = -1;
    this.fileProgress = [];
    this.onCompleteCallback = () => {}
  }


  private filePathKey(file: File) {
    return (
      file.webkitRelativePath == "")?file.name:file.webkitRelativePath;
  }
}
