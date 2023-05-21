import {aws_exports} from "../../../aws-exports";
import {S3Object} from "../../../models";
import {StorageHelper} from "../StorageHelper/StorageHelper";
import {v4 as uuidv4} from 'uuid';
import {getUUID} from "../Application/Session";

export class S3ObjectParams implements S3Object{
  bucket: string = aws_exports["aws_user_files_s3_bucket"];
  key: string;
  region: string = aws_exports["aws_user_files_s3_bucket_region"];
  relativePath: string;
  size?: string;
  extension?:string;
  mimetype?:string;

  identifier:string;

  #file:File;


  get file(): File {
    return this.#file;
  }

  set file(value: File) {
    this.#file = value;
  }

  constructor(
    sessionId:string,
    file:File
  ) {
    this.#file = file;
    this.extension = file.name.split(".").pop();
    this.key = new StorageHelper().getKey(sessionId,`${this.uniqueId}.${this.extension}`);
    this.identifier = file.name;
    this.relativePath = this.webKitRelativePath;
    this.size = String(file.size);
    this.mimetype = file.type;

  }

  get uniqueId(){
    return getUUID() + getUUID();
  }
  get webKitRelativePath(){
    return (this.#file.webkitRelativePath.length==0)?
      this.#file.name:
      this.#file.webkitRelativePath;
  }

}
