import {Auth} from "aws-amplify";
import {SignUpParams} from "@aws-amplify/auth/src/types";


export interface SignInParams {
  username:string;
  password:string;
  rememberDevice:string;
}




export async function SignIn(signInParams:SignInParams){
  return new Promise<any>( (resolve, reject) => {
    Auth.signIn(
      signInParams.username,
      signInParams.password,
    ).then((res)=>resolve(res)).catch((error)=> reject(error));
  });
}

export async function SignUp(signUpParams: SignUpParams) {

  return new Promise<any>( (resolve, reject) => {
    Auth.signUp(signUpParams).then((res)=>resolve(res)).catch((error)=> reject(error));
  });
}

export async function ForgotPassword(username:string){

  return new Promise<any>( (resolve, reject) => {
    Auth.forgotPassword(username).then((res)=>resolve(res)).catch((error)=> reject(error));
  });
}

export async function ForgotPasswordSubmit(username:string,code:string,password:string){
  return new Promise<any>( (resolve, reject) => {
    Auth.forgotPasswordSubmit(username,code,password).then((res)=>resolve(res)).catch((error)=> reject(error));
  });
}

export async function CompleteNewPassword(user:any,password:string){
  return new Promise<any>( (resolve, reject) => {
    Auth.completeNewPassword(user,password)
      .then((res)=>resolve(res))
      .catch((error)=> reject(error));
  });
}

export async function ConfirmSignUp(user:any, code:string){
  return new Promise<any>( (resolve, reject) => {
    Auth.confirmSignUp(user,code)
      .then((res)=>resolve(res))
      .catch((error)=> reject(error));
  });
}
