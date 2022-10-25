import {
  APIService,
  CreateLinkInfoInput,
  CreateLinkInfoMutation,
  CreateMailInfoInput, CreateMailInfoMutation,
  CreateSessionInput, CreateSessionMutation
} from "../../API.service";
import {Session} from "../Application/Session";
import {printer} from "../../app.component";
import {v4 as uuidv4} from 'uuid';
import API from "@aws-amplify/api-graphql";
import {createLinkInfo, createMailInfo, createSession} from "../../../graphql/mutations";
import {getCurrentUser} from "../Signer/SignInHelper";

var api:APIService = new APIService();

export var CreateSession = async (
  sessionInfo:CreateSessionInput,
  transferInfo:CreateMailInfoInput | CreateLinkInfoInput,
  session:Session
)=>{

  let res;

  printer("Link Trasnfer");
  printer(session.linkTransfer)


  if(session.linkTransfer){
  //  LINK TRANSFER
    transferInfo.id = uuidv4();

    res = await API.graphql({
      query:createLinkInfo,
      variables:{
        input:{
          Title:transferInfo.Title,
          Message:transferInfo.Message,
          id:transferInfo.id
        }
      },
      authMode: (getCurrentUser()==undefined)?"API_KEY":"AMAZON_COGNITO_USER_POOLS"
    }) as any;
    res = <CreateLinkInfoMutation>(res).data.createLinkInfo
    sessionInfo.sessionLinkInfoId = res.id;
  }
  else{
  //MAIL TRANSFER
    transferInfo.id = uuidv4();

    res = await API.graphql({
      query:createMailInfo,
      variables: {
        input: <CreateMailInfoInput>transferInfo
      },
      authMode: (getCurrentUser()==undefined)?"API_KEY":"AMAZON_COGNITO_USER_POOLS"
    }) as any;
    res = <CreateMailInfoMutation>(res).data.createMailInfo

    sessionInfo.sessionMailInfoId = res.id;
  }

  printer("Created Transfer Info");
  printer(res);

  printer("Session Info");
  printer(sessionInfo);


  let sessionRes = await API.graphql({
    query:createSession,
    variables: {
      input: sessionInfo
    },
    authMode: (getCurrentUser()==undefined)?"API_KEY":"AMAZON_COGNITO_USER_POOLS"
  }) as any;
//  NOW CREATE SESSION
//   let sessionRes = await api.CreateSession(sessionInfo);


  return <CreateSessionMutation>sessionRes.data.createSession;
}
