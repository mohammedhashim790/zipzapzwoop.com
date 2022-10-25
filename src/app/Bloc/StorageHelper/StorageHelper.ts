import {Injectable} from "@angular/core";
import {Storage} from "aws-amplify";
import { v4 as uuidv4 } from 'uuid';
import {environment} from "../../../environments/environment";
import * as JSZip from "jszip";
import {printer} from "../../app.component";
import {AppErrors} from "../Application/AppErrors";
import {Errors} from "../Application/Constants";



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


  current:number = 0;

  currentInBytes:number = 0;

  iterProgress:number = 0;

  totalFiles = -1;
  private fileProgress: Array<boolean> = [];
  private files: Array<File> = [];


  private _instanceLocked:boolean = false;
  private paused: boolean = false;


  get TotalProgress(){
    return this.current;
    // return this.fileProgress.reduce((num,value)=>num + value,0);
  }

  onCompleteCallback: any;

  get api(): string {
    return environment.apiKey;
  }

  public LockInstance(){
    this._instanceLocked = true;
  }

  public ReleaseInstance(){
    this._instanceLocked = false;
  }


  public getCurrentProgress(){
    return this.current;
  }

  // public getSumProgress(){
  //   return this.fileProgress.reduce((sum,value)=>sum+value,0);
  // }


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
          // printer("Uploaded" + key);
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
      // printer("Uploaded File " + key + "Progress " + this.iterProgress);
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
   * @param filesToUpload
   * @param sessionId
   * @constructor
   */
  public async UploadObjects(filesToUpload: Array<File>,
                              sessionId:string) {

    if(this._instanceLocked) {
      printer("Instance Locked. ")
      return;
    }
    try{
      this.LockInstance();

      this.files = filesToUpload;

      this.fileProgress = Array(this.files.length).fill(false);

      this.totalSize = this.files.reduce((num:number,file:File)=> num + file.size,0);

      printer("Files " + this.files.length );
      printer("Total Size " + this.totalSize);

      this.files = this.files.flat();
      if(this.files.length == 1){
        let file = this.files[0];
        let key = this.getKey(sessionId,this.filePathKey(file));
        // let key = this.filePathKey(file);
        await this.UploadObject(key, file, 0);
        return sessionId;
      }
      this.iterProgress = 0;
      for (let iter = 0; iter < this.files.length; iter++) {
        let file = this.files[iter];
        let key = this.getKey(sessionId,this.filePathKey(file));
        // let key = this.filePathKey(file);
        await this.UploadObject(key, file,iter);
        // printer(`Completed ${iter}`);
        // if(iter == 4){
        //   throw new AppErrors(Errors.CUSTOM_ERROR,"Custom Error");
        // }
        this.fileProgress[iter] = true;
      }
      return sessionId;
    }catch (e){
      this.ReleaseInstance();
      if(e instanceof AppErrors)
        throw new AppErrors(Errors.CUSTOM_ERROR,"Check Exception");
      throw new AppErrors(Errors.FILE_UPLOAD_ERROR,e as string);
    }
  }

  private filePathKey(file: File) {
    return (
      file.webkitRelativePath == "")?file.name:file.webkitRelativePath;
  }


  ResumeInstance(){
    let completedUntil = this.fileProgress.findIndex((value)=> value);
    this.files = this.files.splice(completedUntil);
  }

  PauseInstance(){
    this.paused = true;
  }


  reset(){
    this.current = 0;
    this.currentInBytes = 0;
    this.iterProgress = 0;
    this.totalFiles = -1;
    this.fileProgress = [];
    this.onCompleteCallback = () => {}
  }
}
