import {aws_exports} from "../../../aws-exports";
import {S3Object} from "../../../models";

export class S3ObjectParams implements S3Object{
  bucket: string = aws_exports["aws_user_files_s3_bucket"];
  key: string;
  region: string = aws_exports["aws_user_files_s3_bucket_region"];
  relativePath: string;
  size?: string;
  extension?:string;
  mimetype?:string;


  constructor(
    key: string,
    relativePath: string,
    size?: string,
    extension?: string,
    mimetype?: string) {
    this.key = key;
    this.relativePath = relativePath;
    this.size = size;
    this.extension = extension;
    this.mimetype = mimetype;
  }
}
