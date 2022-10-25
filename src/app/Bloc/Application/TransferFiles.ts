import {Errors, ExpiryDatePlan, ONE_GIGABYTE, RecipientPlan, totalSize} from "./Constants";
import {AppErrors} from "./AppErrors";
import {printer} from "../../app.component";
import {getCurrentUser} from "../Signer/SignInHelper";
import {S3ObjectParams} from "../API/S3ObjectParam";
import {filePathKey} from "./ApplicationHelper";



export class TransferConstants{

  public static readonly FILE_SIZE_LIMIT = ()=>{
    if(getCurrentUser()){
      return ONE_GIGABYTE * 3;
    }
    return ONE_GIGABYTE * 2;
  };
  public static readonly FILE_COUNT_LIMIT: number = 400;


  //LIMITS
  static readonly MAX_RECIPIENTS_COUNT = ()=>{
    if(getCurrentUser() == undefined){
      return RecipientPlan.PUBLIC;
    }
    return RecipientPlan.BASIC;
  };

  public static readonly expiryDate = ()=>{
    if(getCurrentUser() == undefined){
      return ExpiryDatePlan.PUBLIC;
    }
    return ExpiryDatePlan.BASIC;
  };



}

export class TransferFiles {

  get locked(): boolean {
    return this._locked;
  }

  private _locked: boolean = false;

  LockInstance() {
    this._locked = true;
  }

  ReleaseInstance() {
    this._locked = false;
  }
  // ONE_GIGABYTE / 512;

  public files: Array<Array<File> | any | File>;

  get size() {
    return this.files.reduce((sum, file) => sum + file.size, 0);
  }

  get SizeLimitRemaining() {
    return TransferConstants.FILE_SIZE_LIMIT() - this.size;
  }

  get MaxLimitExceeded() {
    return this.size > TransferConstants.FILE_SIZE_LIMIT();
  }

  get ProcessedS3Object(){
    return this.files.map((file) =>
      new S3ObjectParams(
        filePathKey(file),
        file.webkitRelativePath,
        String(file.size),
        file.name.split(".")[-1],
        file.type
      )
    );
  }

  constructor() {
    this.files = [];
  }

  push(files: Array<File>) {

    // if(this._locked)
    //   return;

    this.LockInstance();

    let postFunc = () => {
    };

    if (this.MaxLimitExceeded || totalSize(files) > TransferConstants.FILE_SIZE_LIMIT()) {
      this.ReleaseInstance();
      throw new AppErrors(Errors.FILE_MAX_LIMIT_EXCEEDED, "Maximum File size limit exceeded!");
    }

    if (this.files.length > TransferConstants.FILE_COUNT_LIMIT) {
      this.ReleaseInstance();
      throw new AppErrors(Errors.FILE_LIMIT_EXCEEDED, "Maximum File Count limit exceeded!");
    }


    for (const file of files) {
      if (this.files.length >= TransferConstants.FILE_COUNT_LIMIT) {
        postFunc = () => {
          throw new AppErrors(Errors.FILE_LIMIT_EXCEEDED, "Maximum File Count limit exceeded!");
        }
        break;
      }

      if (this.files.findIndex((value) => value.name == file.name) == -1) {
        this.files.push(file);
      } else {
        printer("Duplicate Found");
        postFunc = () => {
          throw new AppErrors(Errors.DUPLICATE_FILE_EXCEPTION,
            "Files with the same name were found. Please rename and re-select files.");
        }
      }
    }

    this.ReleaseInstance();

    postFunc();


    // this.files = this.files.flat(Infinity);


  }


  Remove(index: number) {
    this.files.splice(index, 1);
  }


  hasDuplicates(files: Array<File> | File | any) {
    if (files instanceof Array) {
      return this.files.filter((file) => {
        return files.findIndex((file2) => file2.name == file.name) == -1;
      }).length == 0;
    }
    return this.files.indexOf((value: any) => value.name == files.name) != -1;
  }


  FILE_SIZE_LIMIT() {
    return TransferConstants.FILE_SIZE_LIMIT();
  }
}
