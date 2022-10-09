

export class AppErrors extends Error{

  errorCode:any;

  constructor(errorCode:any,message:string) {
    super();
    this.message = message;
    this.errorCode = errorCode;
  }

}
