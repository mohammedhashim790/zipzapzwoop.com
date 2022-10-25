import {Auth, Hub} from "aws-amplify";
import {SignUpParams} from "@aws-amplify/auth/src/types";
import {printer} from "../../app.component";
import {CognitoUser, ISignUpResult} from "amazon-cognito-identity-js";
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import API from "@aws-amplify/api-graphql";
import {createUser} from "../../../graphql/mutations";
import {SubscriptionPlanType} from "../../../models";


export interface SignInParams {
  username: string;
  password: string;
  rememberDevice: boolean;
}

var currentAuthenticatedUser: CognitoUser |undefined;

export var getCurrentUser = () =>{
  return currentAuthenticatedUser;
}


export var setCurrentUser = async () => {
  // Auth.signOut();

  Hub.listen('auth', ({payload: {event, data}}) => {
    switch (event) {
      case "signIn":
        printer("Sign In Event Triggered");
        currentAuthenticatedUser = data;
        break;
      case "signOut":
        printer("Sign Out Event Triggered");
        currentAuthenticatedUser = undefined;
        break;
      case "customOAuthState":
        printer("Custom OAuth Triggered");
    }
  });


  return new Promise<CognitoUser |undefined>((resolve,reject)=>{
    Auth
      .currentAuthenticatedUser()
      .then((res) => {
        currentAuthenticatedUser = res;
        printer("User Signed is as" + res);
        printer(res);

        resolve(currentAuthenticatedUser);

      }).catch((err) => {
      printer("Error Fetching Current User");
      printer(err);
      currentAuthenticatedUser = undefined;

      reject(currentAuthenticatedUser);
    })
  });

}


export async function SignIn(signInParams:SignInParams){
  return new Promise<any>( (resolve, reject) => {
    Auth.signIn(
      signInParams.username,
      signInParams.password,
    ).then((res)=> {
      currentAuthenticatedUser = res;
      resolve(res)
    }).catch((error)=> {
      currentAuthenticatedUser = undefined;
      reject(error)
    });
  });
}

export async function SignUp(signUpParams: SignUpParams) {
  return new Promise<any>( (resolve, reject) => {
    Auth.signUp(signUpParams).then((res)=>{
      currentAuthenticatedUser = res.user;
      resolve(res)
    })
      .catch((error)=> {
        currentAuthenticatedUser = undefined;
        reject(error)
      });
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



export async function SignOut(){
  return new Promise<any>( (resolve, reject) => {
    Auth.signOut()
      .then((res)=>{
        resolve(res)
      })
      .catch((error)=> {
        reject(error)
      }).finally(()=>{
      currentAuthenticatedUser = undefined;
    })
  });
}


export async function SignInWithGoogle(){
  return new Promise<any>( (resolve, reject) => {
    Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })
      .then((res)=>{
        printer("Current Federated User Credentials");
        printer(res);
        resolve(res)
      })
      .catch((error)=> {
        printer("Current Federated User Error");
        printer(error);
        reject(error)
      }).finally(()=>{
        printer("Current Federated User Finally");
      currentAuthenticatedUser = undefined;
    })
  });
}




