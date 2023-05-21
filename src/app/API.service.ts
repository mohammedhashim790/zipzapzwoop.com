/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateSubscriptionPlan: OnCreateSubscriptionPlanSubscription;
  onUpdateSubscriptionPlan: OnUpdateSubscriptionPlanSubscription;
  onDeleteSubscriptionPlan: OnDeleteSubscriptionPlanSubscription;
  onCreateRecipients: OnCreateRecipientsSubscription;
  onUpdateRecipients: OnUpdateRecipientsSubscription;
  onDeleteRecipients: OnDeleteRecipientsSubscription;
  onCreateSession: OnCreateSessionSubscription;
  onUpdateSession: OnUpdateSessionSubscription;
  onDeleteSession: OnDeleteSessionSubscription;
  onCreateMailInfo: OnCreateMailInfoSubscription;
  onUpdateMailInfo: OnUpdateMailInfoSubscription;
  onDeleteMailInfo: OnDeleteMailInfoSubscription;
  onCreateLinkInfo: OnCreateLinkInfoSubscription;
  onUpdateLinkInfo: OnUpdateLinkInfoSubscription;
  onDeleteLinkInfo: OnDeleteLinkInfoSubscription;
  onCreateBackdrop: OnCreateBackdropSubscription;
  onUpdateBackdrop: OnUpdateBackdropSubscription;
  onDeleteBackdrop: OnDeleteBackdropSubscription;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
  name?: string | null;
  preferred_username?: string | null;
  subscriptionPlansType?: SubscriptionPlanType | null;
  userSubscriptionPlanId?: string | null;
};

export enum SubscriptionPlanType {
  BASIC = "BASIC",
  STANDARD = "STANDARD",
  PROFESSIONAL = "PROFESSIONAL"
}

export type ModelUserConditionInput = {
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  preferred_username?: ModelStringInput | null;
  subscriptionPlansType?: ModelSubscriptionPlanTypeInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  userSubscriptionPlanId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelSubscriptionPlanTypeInput = {
  eq?: SubscriptionPlanType | null;
  ne?: SubscriptionPlanType | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: SubscriptionPlan | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type SubscriptionPlan = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: User | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type UpdateSubscriptionPlanInput = {
  id: string;
  subscriptionPlansType?: SubscriptionPlanType | null;
  subscriptionPlanUserId?: string | null;
};

export type ModelSubscriptionPlanConditionInput = {
  subscriptionPlansType?: ModelSubscriptionPlanTypeInput | null;
  and?: Array<ModelSubscriptionPlanConditionInput | null> | null;
  or?: Array<ModelSubscriptionPlanConditionInput | null> | null;
  not?: ModelSubscriptionPlanConditionInput | null;
  subscriptionPlanUserId?: ModelIDInput | null;
};

export type DeleteSubscriptionPlanInput = {
  id: string;
};

export type UpdateSessionInput = {
  id: string;
  files?: Array<S3ObjectInput | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  shortUrl?: string | null;
  expiry?: number | null;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
};

export type S3ObjectInput = {
  key: string;
  bucket: string;
  region: string;
  relativePath: string;
  size?: string | null;
  extension?: string | null;
  mimetype?: string | null;
  identifier: string;
};

export type ModelSessionConditionInput = {
  fileSize?: ModelStringInput | null;
  password?: ModelStringInput | null;
  passwordProtected?: ModelBooleanInput | null;
  shortUrl?: ModelStringInput | null;
  expiry?: ModelIntInput | null;
  and?: Array<ModelSessionConditionInput | null> | null;
  or?: Array<ModelSessionConditionInput | null> | null;
  not?: ModelSessionConditionInput | null;
  sessionMailInfoId?: ModelIDInput | null;
  sessionLinkInfoId?: ModelIDInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Session = {
  __typename: "Session";
  id: string;
  files?: Array<S3Object | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: MailInfo | null;
  linkInfo?: LinkInfo | null;
  backdrop?: ModelBackdropConnection | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type S3Object = {
  __typename: "S3Object";
  key: string;
  bucket: string;
  region: string;
  relativePath: string;
  size?: string | null;
  extension?: string | null;
  mimetype?: string | null;
  identifier: string;
};

export type MailInfo = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type LinkInfo = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type ModelBackdropConnection = {
  __typename: "ModelBackdropConnection";
  items: Array<Backdrop | null>;
  nextToken?: string | null;
};

export type Backdrop = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: S3Object;
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteSessionInput = {
  id: string;
};

export type CreateRecipientsInput = {
  id?: string | null;
  recipient: string;
};

export type ModelRecipientsConditionInput = {
  recipient?: ModelStringInput | null;
  and?: Array<ModelRecipientsConditionInput | null> | null;
  or?: Array<ModelRecipientsConditionInput | null> | null;
  not?: ModelRecipientsConditionInput | null;
};

export type Recipients = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type UpdateRecipientsInput = {
  id: string;
  recipient?: string | null;
};

export type DeleteRecipientsInput = {
  id: string;
};

export type UpdateMailInfoInput = {
  id: string;
  FromEmail?: string | null;
  Recipients?: Array<string | null> | null;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject?: string | null;
  Title?: string | null;
  Message?: string | null;
};

export type ModelMailInfoConditionInput = {
  FromEmail?: ModelStringInput | null;
  Recipients?: ModelStringInput | null;
  Cc?: ModelStringInput | null;
  Bcc?: ModelStringInput | null;
  Subject?: ModelStringInput | null;
  Title?: ModelStringInput | null;
  Message?: ModelStringInput | null;
  and?: Array<ModelMailInfoConditionInput | null> | null;
  or?: Array<ModelMailInfoConditionInput | null> | null;
  not?: ModelMailInfoConditionInput | null;
};

export type DeleteMailInfoInput = {
  id: string;
};

export type UpdateLinkInfoInput = {
  id: string;
  Title?: string | null;
  Message?: string | null;
};

export type ModelLinkInfoConditionInput = {
  Title?: ModelStringInput | null;
  Message?: ModelStringInput | null;
  and?: Array<ModelLinkInfoConditionInput | null> | null;
  or?: Array<ModelLinkInfoConditionInput | null> | null;
  not?: ModelLinkInfoConditionInput | null;
};

export type DeleteLinkInfoInput = {
  id: string;
};

export type CreateBackdropInput = {
  id?: string | null;
  SessionID: string;
  S3Object: S3ObjectInput;
  static: boolean;
};

export type ModelBackdropConditionInput = {
  SessionID?: ModelIDInput | null;
  static?: ModelBooleanInput | null;
  and?: Array<ModelBackdropConditionInput | null> | null;
  or?: Array<ModelBackdropConditionInput | null> | null;
  not?: ModelBackdropConditionInput | null;
};

export type UpdateBackdropInput = {
  id: string;
  SessionID?: string | null;
  S3Object?: S3ObjectInput | null;
  static?: boolean | null;
};

export type DeleteBackdropInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlansType: SubscriptionPlanType;
  userSubscriptionPlanId?: string | null;
};

export type CreateSubscriptionPlanInput = {
  id?: string | null;
  subscriptionPlansType: SubscriptionPlanType;
  subscriptionPlanUserId?: string | null;
};

export type CreateSessionInput = {
  id?: string | null;
  files?: Array<S3ObjectInput | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  shortUrl?: string | null;
  expiry?: number | null;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
};

export type CreateMailInfoInput = {
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
};

export type CreateLinkInfoInput = {
  id?: string | null;
  Title: string;
  Message: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  preferred_username?: ModelStringInput | null;
  subscriptionPlansType?: ModelSubscriptionPlanTypeInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  userSubscriptionPlanId?: ModelIDInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionPlanFilterInput = {
  id?: ModelIDInput | null;
  subscriptionPlansType?: ModelSubscriptionPlanTypeInput | null;
  and?: Array<ModelSubscriptionPlanFilterInput | null> | null;
  or?: Array<ModelSubscriptionPlanFilterInput | null> | null;
  not?: ModelSubscriptionPlanFilterInput | null;
  subscriptionPlanUserId?: ModelIDInput | null;
};

export type ModelSubscriptionPlanConnection = {
  __typename: "ModelSubscriptionPlanConnection";
  items: Array<SubscriptionPlan | null>;
  nextToken?: string | null;
};

export type ModelRecipientsFilterInput = {
  id?: ModelIDInput | null;
  recipient?: ModelStringInput | null;
  and?: Array<ModelRecipientsFilterInput | null> | null;
  or?: Array<ModelRecipientsFilterInput | null> | null;
  not?: ModelRecipientsFilterInput | null;
};

export type ModelRecipientsConnection = {
  __typename: "ModelRecipientsConnection";
  items: Array<Recipients | null>;
  nextToken?: string | null;
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null;
  fileSize?: ModelStringInput | null;
  password?: ModelStringInput | null;
  passwordProtected?: ModelBooleanInput | null;
  shortUrl?: ModelStringInput | null;
  expiry?: ModelIntInput | null;
  and?: Array<ModelSessionFilterInput | null> | null;
  or?: Array<ModelSessionFilterInput | null> | null;
  not?: ModelSessionFilterInput | null;
  sessionMailInfoId?: ModelIDInput | null;
  sessionLinkInfoId?: ModelIDInput | null;
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection";
  items: Array<Session | null>;
  nextToken?: string | null;
};

export type ModelMailInfoFilterInput = {
  id?: ModelIDInput | null;
  FromEmail?: ModelStringInput | null;
  Recipients?: ModelStringInput | null;
  Cc?: ModelStringInput | null;
  Bcc?: ModelStringInput | null;
  Subject?: ModelStringInput | null;
  Title?: ModelStringInput | null;
  Message?: ModelStringInput | null;
  and?: Array<ModelMailInfoFilterInput | null> | null;
  or?: Array<ModelMailInfoFilterInput | null> | null;
  not?: ModelMailInfoFilterInput | null;
};

export type ModelMailInfoConnection = {
  __typename: "ModelMailInfoConnection";
  items: Array<MailInfo | null>;
  nextToken?: string | null;
};

export type ModelLinkInfoFilterInput = {
  id?: ModelIDInput | null;
  Title?: ModelStringInput | null;
  Message?: ModelStringInput | null;
  and?: Array<ModelLinkInfoFilterInput | null> | null;
  or?: Array<ModelLinkInfoFilterInput | null> | null;
  not?: ModelLinkInfoFilterInput | null;
};

export type ModelLinkInfoConnection = {
  __typename: "ModelLinkInfoConnection";
  items: Array<LinkInfo | null>;
  nextToken?: string | null;
};

export type ModelBackdropFilterInput = {
  id?: ModelIDInput | null;
  SessionID?: ModelIDInput | null;
  static?: ModelBooleanInput | null;
  and?: Array<ModelBackdropFilterInput | null> | null;
  or?: Array<ModelBackdropFilterInput | null> | null;
  not?: ModelBackdropFilterInput | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  email?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  preferred_username?: ModelSubscriptionStringInput | null;
  subscriptionPlansType?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionSubscriptionPlanFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  subscriptionPlansType?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionSubscriptionPlanFilterInput | null> | null;
  or?: Array<ModelSubscriptionSubscriptionPlanFilterInput | null> | null;
};

export type ModelSubscriptionRecipientsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  recipient?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRecipientsFilterInput | null> | null;
  or?: Array<ModelSubscriptionRecipientsFilterInput | null> | null;
};

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  fileSize?: ModelSubscriptionStringInput | null;
  password?: ModelSubscriptionStringInput | null;
  passwordProtected?: ModelSubscriptionBooleanInput | null;
  shortUrl?: ModelSubscriptionStringInput | null;
  expiry?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionSessionFilterInput | null> | null;
  or?: Array<ModelSubscriptionSessionFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionMailInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  FromEmail?: ModelSubscriptionStringInput | null;
  Recipients?: ModelSubscriptionStringInput | null;
  Cc?: ModelSubscriptionStringInput | null;
  Bcc?: ModelSubscriptionStringInput | null;
  Subject?: ModelSubscriptionStringInput | null;
  Title?: ModelSubscriptionStringInput | null;
  Message?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMailInfoFilterInput | null> | null;
  or?: Array<ModelSubscriptionMailInfoFilterInput | null> | null;
};

export type ModelSubscriptionLinkInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  Title?: ModelSubscriptionStringInput | null;
  Message?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLinkInfoFilterInput | null> | null;
  or?: Array<ModelSubscriptionLinkInfoFilterInput | null> | null;
};

export type ModelSubscriptionBackdropFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  SessionID?: ModelSubscriptionIDInput | null;
  static?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionBackdropFilterInput | null> | null;
  or?: Array<ModelSubscriptionBackdropFilterInput | null> | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: {
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: {
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type UpdateSubscriptionPlanMutation = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: {
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type DeleteSubscriptionPlanMutation = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: {
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type UpdateSessionMutation = {
  __typename: "Session";
  id: string;
  files?: Array<{
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  } | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: {
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  linkInfo?: {
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  backdrop?: {
    __typename: "ModelBackdropConnection";
    items: Array<{
      __typename: "Backdrop";
      id: string;
      SessionID: string;
      S3Object: {
        __typename: "S3Object";
        key: string;
        bucket: string;
        region: string;
        relativePath: string;
        size?: string | null;
        extension?: string | null;
        mimetype?: string | null;
        identifier: string;
      };
      static: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type DeleteSessionMutation = {
  __typename: "Session";
  id: string;
  files?: Array<{
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  } | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: {
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  linkInfo?: {
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  backdrop?: {
    __typename: "ModelBackdropConnection";
    items: Array<{
      __typename: "Backdrop";
      id: string;
      SessionID: string;
      S3Object: {
        __typename: "S3Object";
        key: string;
        bucket: string;
        region: string;
        relativePath: string;
        size?: string | null;
        extension?: string | null;
        mimetype?: string | null;
        identifier: string;
      };
      static: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type CreateRecipientsMutation = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type UpdateRecipientsMutation = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type DeleteRecipientsMutation = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type UpdateMailInfoMutation = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type DeleteMailInfoMutation = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type UpdateLinkInfoMutation = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type DeleteLinkInfoMutation = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type CreateBackdropMutation = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: {
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  };
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateBackdropMutation = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: {
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  };
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteBackdropMutation = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: {
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  };
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: {
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type CreateSubscriptionPlanMutation = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: {
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type CreateSessionMutation = {
  __typename: "Session";
  id: string;
  files?: Array<{
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  } | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: {
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  linkInfo?: {
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  backdrop?: {
    __typename: "ModelBackdropConnection";
    items: Array<{
      __typename: "Backdrop";
      id: string;
      SessionID: string;
      S3Object: {
        __typename: "S3Object";
        key: string;
        bucket: string;
        region: string;
        relativePath: string;
        size?: string | null;
        extension?: string | null;
        mimetype?: string | null;
        identifier: string;
      };
      static: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type CreateMailInfoMutation = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type CreateLinkInfoMutation = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: {
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetSubscriptionPlanQuery = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: {
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type ListSubscriptionPlansQuery = {
  __typename: "ModelSubscriptionPlanConnection";
  items: Array<{
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetRecipientsQuery = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type ListRecipientsQuery = {
  __typename: "ModelRecipientsConnection";
  items: Array<{
    __typename: "Recipients";
    id: string;
    recipient: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetSessionQuery = {
  __typename: "Session";
  id: string;
  files?: Array<{
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  } | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: {
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  linkInfo?: {
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  backdrop?: {
    __typename: "ModelBackdropConnection";
    items: Array<{
      __typename: "Backdrop";
      id: string;
      SessionID: string;
      S3Object: {
        __typename: "S3Object";
        key: string;
        bucket: string;
        region: string;
        relativePath: string;
        size?: string | null;
        extension?: string | null;
        mimetype?: string | null;
        identifier: string;
      };
      static: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type ListSessionsQuery = {
  __typename: "ModelSessionConnection";
  items: Array<{
    __typename: "Session";
    id: string;
    files?: Array<{
      __typename: "S3Object";
      key: string;
      bucket: string;
      region: string;
      relativePath: string;
      size?: string | null;
      extension?: string | null;
      mimetype?: string | null;
      identifier: string;
    } | null> | null;
    fileSize?: string | null;
    password?: string | null;
    passwordProtected?: boolean | null;
    mailInfo?: {
      __typename: "MailInfo";
      id?: string | null;
      FromEmail: string;
      Recipients: Array<string | null>;
      Cc?: Array<string | null> | null;
      Bcc?: Array<string | null> | null;
      Subject: string;
      Title: string;
      Message: string;
      SentOn: string;
      updatedOn: string;
      owner?: string | null;
    } | null;
    linkInfo?: {
      __typename: "LinkInfo";
      id?: string | null;
      Title: string;
      Message: string;
      SentOn: string;
      updatedOn: string;
      owner?: string | null;
    } | null;
    backdrop?: {
      __typename: "ModelBackdropConnection";
      items: Array<{
        __typename: "Backdrop";
        id: string;
        SessionID: string;
        S3Object: {
          __typename: "S3Object";
          key: string;
          bucket: string;
          region: string;
          relativePath: string;
          size?: string | null;
          extension?: string | null;
          mimetype?: string | null;
          identifier: string;
        };
        static: boolean;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    shortUrl?: string | null;
    expiry?: number | null;
    SentOn: string;
    updatedOn: string;
    sessionMailInfoId?: string | null;
    sessionLinkInfoId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetMailInfoQuery = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type ListMailInfosQuery = {
  __typename: "ModelMailInfoConnection";
  items: Array<{
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetLinkInfoQuery = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type ListLinkInfosQuery = {
  __typename: "ModelLinkInfoConnection";
  items: Array<{
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetBackdropQuery = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: {
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  };
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListBackdropsQuery = {
  __typename: "ModelBackdropConnection";
  items: Array<{
    __typename: "Backdrop";
    id: string;
    SessionID: string;
    S3Object: {
      __typename: "S3Object";
      key: string;
      bucket: string;
      region: string;
      relativePath: string;
      size?: string | null;
      extension?: string | null;
      mimetype?: string | null;
      identifier: string;
    };
    static: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: {
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: {
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  preferred_username: string;
  subscriptionPlan?: {
    __typename: "SubscriptionPlan";
    id: string;
    subscriptionPlansType: SubscriptionPlanType;
    user?: {
      __typename: "User";
      id: string;
      email: string;
      name: string;
      preferred_username: string;
      subscriptionPlan?: {
        __typename: "SubscriptionPlan";
        id: string;
        subscriptionPlansType: SubscriptionPlanType;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name: string;
          preferred_username: string;
          subscriptionPlan?: {
            __typename: "SubscriptionPlan";
            id: string;
            subscriptionPlansType: SubscriptionPlanType;
            user?: {
              __typename: "User";
              id: string;
              email: string;
              name: string;
              preferred_username: string;
              subscriptionPlan?: {
                __typename: "SubscriptionPlan";
                id: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                subscriptionPlanUserId?: string | null;
                owner?: string | null;
              } | null;
              subscriptionPlansType: SubscriptionPlanType;
              createdAt: string;
              updatedAt: string;
              userSubscriptionPlanId?: string | null;
              owner?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            subscriptionPlanUserId?: string | null;
            owner?: string | null;
          } | null;
          subscriptionPlansType: SubscriptionPlanType;
          createdAt: string;
          updatedAt: string;
          userSubscriptionPlanId?: string | null;
          owner?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        subscriptionPlanUserId?: string | null;
        owner?: string | null;
      } | null;
      subscriptionPlansType: SubscriptionPlanType;
      createdAt: string;
      updatedAt: string;
      userSubscriptionPlanId?: string | null;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    subscriptionPlanUserId?: string | null;
    owner?: string | null;
  } | null;
  subscriptionPlansType: SubscriptionPlanType;
  createdAt: string;
  updatedAt: string;
  userSubscriptionPlanId?: string | null;
  owner?: string | null;
};

export type OnCreateSubscriptionPlanSubscription = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: {
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type OnUpdateSubscriptionPlanSubscription = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: {
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type OnDeleteSubscriptionPlanSubscription = {
  __typename: "SubscriptionPlan";
  id: string;
  subscriptionPlansType: SubscriptionPlanType;
  user?: {
    __typename: "User";
    id: string;
    email: string;
    name: string;
    preferred_username: string;
    subscriptionPlan?: {
      __typename: "SubscriptionPlan";
      id: string;
      subscriptionPlansType: SubscriptionPlanType;
      user?: {
        __typename: "User";
        id: string;
        email: string;
        name: string;
        preferred_username: string;
        subscriptionPlan?: {
          __typename: "SubscriptionPlan";
          id: string;
          subscriptionPlansType: SubscriptionPlanType;
          user?: {
            __typename: "User";
            id: string;
            email: string;
            name: string;
            preferred_username: string;
            subscriptionPlan?: {
              __typename: "SubscriptionPlan";
              id: string;
              subscriptionPlansType: SubscriptionPlanType;
              user?: {
                __typename: "User";
                id: string;
                email: string;
                name: string;
                preferred_username: string;
                subscriptionPlansType: SubscriptionPlanType;
                createdAt: string;
                updatedAt: string;
                userSubscriptionPlanId?: string | null;
                owner?: string | null;
              } | null;
              createdAt: string;
              updatedAt: string;
              subscriptionPlanUserId?: string | null;
              owner?: string | null;
            } | null;
            subscriptionPlansType: SubscriptionPlanType;
            createdAt: string;
            updatedAt: string;
            userSubscriptionPlanId?: string | null;
            owner?: string | null;
          } | null;
          createdAt: string;
          updatedAt: string;
          subscriptionPlanUserId?: string | null;
          owner?: string | null;
        } | null;
        subscriptionPlansType: SubscriptionPlanType;
        createdAt: string;
        updatedAt: string;
        userSubscriptionPlanId?: string | null;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      subscriptionPlanUserId?: string | null;
      owner?: string | null;
    } | null;
    subscriptionPlansType: SubscriptionPlanType;
    createdAt: string;
    updatedAt: string;
    userSubscriptionPlanId?: string | null;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  subscriptionPlanUserId?: string | null;
  owner?: string | null;
};

export type OnCreateRecipientsSubscription = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnUpdateRecipientsSubscription = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnDeleteRecipientsSubscription = {
  __typename: "Recipients";
  id: string;
  recipient: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnCreateSessionSubscription = {
  __typename: "Session";
  id: string;
  files?: Array<{
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  } | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: {
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  linkInfo?: {
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  backdrop?: {
    __typename: "ModelBackdropConnection";
    items: Array<{
      __typename: "Backdrop";
      id: string;
      SessionID: string;
      S3Object: {
        __typename: "S3Object";
        key: string;
        bucket: string;
        region: string;
        relativePath: string;
        size?: string | null;
        extension?: string | null;
        mimetype?: string | null;
        identifier: string;
      };
      static: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type OnUpdateSessionSubscription = {
  __typename: "Session";
  id: string;
  files?: Array<{
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  } | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: {
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  linkInfo?: {
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  backdrop?: {
    __typename: "ModelBackdropConnection";
    items: Array<{
      __typename: "Backdrop";
      id: string;
      SessionID: string;
      S3Object: {
        __typename: "S3Object";
        key: string;
        bucket: string;
        region: string;
        relativePath: string;
        size?: string | null;
        extension?: string | null;
        mimetype?: string | null;
        identifier: string;
      };
      static: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type OnDeleteSessionSubscription = {
  __typename: "Session";
  id: string;
  files?: Array<{
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  } | null> | null;
  fileSize?: string | null;
  password?: string | null;
  passwordProtected?: boolean | null;
  mailInfo?: {
    __typename: "MailInfo";
    id?: string | null;
    FromEmail: string;
    Recipients: Array<string | null>;
    Cc?: Array<string | null> | null;
    Bcc?: Array<string | null> | null;
    Subject: string;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  linkInfo?: {
    __typename: "LinkInfo";
    id?: string | null;
    Title: string;
    Message: string;
    SentOn: string;
    updatedOn: string;
    owner?: string | null;
  } | null;
  backdrop?: {
    __typename: "ModelBackdropConnection";
    items: Array<{
      __typename: "Backdrop";
      id: string;
      SessionID: string;
      S3Object: {
        __typename: "S3Object";
        key: string;
        bucket: string;
        region: string;
        relativePath: string;
        size?: string | null;
        extension?: string | null;
        mimetype?: string | null;
        identifier: string;
      };
      static: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  shortUrl?: string | null;
  expiry?: number | null;
  SentOn: string;
  updatedOn: string;
  sessionMailInfoId?: string | null;
  sessionLinkInfoId?: string | null;
  owner?: string | null;
};

export type OnCreateMailInfoSubscription = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnUpdateMailInfoSubscription = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnDeleteMailInfoSubscription = {
  __typename: "MailInfo";
  id?: string | null;
  FromEmail: string;
  Recipients: Array<string | null>;
  Cc?: Array<string | null> | null;
  Bcc?: Array<string | null> | null;
  Subject: string;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnCreateLinkInfoSubscription = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnUpdateLinkInfoSubscription = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnDeleteLinkInfoSubscription = {
  __typename: "LinkInfo";
  id?: string | null;
  Title: string;
  Message: string;
  SentOn: string;
  updatedOn: string;
  owner?: string | null;
};

export type OnCreateBackdropSubscription = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: {
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  };
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateBackdropSubscription = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: {
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  };
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteBackdropSubscription = {
  __typename: "Backdrop";
  id: string;
  SessionID: string;
  S3Object: {
    __typename: "S3Object";
    key: string;
    bucket: string;
    region: string;
    relativePath: string;
    size?: string | null;
    extension?: string | null;
    mimetype?: string | null;
    identifier: string;
  };
  static: boolean;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          email
          name
          preferred_username
          subscriptionPlan {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          subscriptionPlansType
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          email
          name
          preferred_username
          subscriptionPlan {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          subscriptionPlansType
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async UpdateSubscriptionPlan(
    input: UpdateSubscriptionPlanInput,
    condition?: ModelSubscriptionPlanConditionInput
  ): Promise<UpdateSubscriptionPlanMutation> {
    const statement = `mutation UpdateSubscriptionPlan($input: UpdateSubscriptionPlanInput!, $condition: ModelSubscriptionPlanConditionInput) {
        updateSubscriptionPlan(input: $input, condition: $condition) {
          __typename
          id
          subscriptionPlansType
          user {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSubscriptionPlanMutation>response.data.updateSubscriptionPlan;
  }
  async DeleteSubscriptionPlan(
    input: DeleteSubscriptionPlanInput,
    condition?: ModelSubscriptionPlanConditionInput
  ): Promise<DeleteSubscriptionPlanMutation> {
    const statement = `mutation DeleteSubscriptionPlan($input: DeleteSubscriptionPlanInput!, $condition: ModelSubscriptionPlanConditionInput) {
        deleteSubscriptionPlan(input: $input, condition: $condition) {
          __typename
          id
          subscriptionPlansType
          user {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSubscriptionPlanMutation>response.data.deleteSubscriptionPlan;
  }
  async UpdateSession(
    input: UpdateSessionInput,
    condition?: ModelSessionConditionInput
  ): Promise<UpdateSessionMutation> {
    const statement = `mutation UpdateSession($input: UpdateSessionInput!, $condition: ModelSessionConditionInput) {
        updateSession(input: $input, condition: $condition) {
          __typename
          id
          files {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          fileSize
          password
          passwordProtected
          mailInfo {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          linkInfo {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          backdrop {
            __typename
            items {
              __typename
              id
              SessionID
              S3Object {
                __typename
                key
                bucket
                region
                relativePath
                size
                extension
                mimetype
                identifier
              }
              static
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          shortUrl
          expiry
          SentOn
          updatedOn
          sessionMailInfoId
          sessionLinkInfoId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSessionMutation>response.data.updateSession;
  }
  async DeleteSession(
    input: DeleteSessionInput,
    condition?: ModelSessionConditionInput
  ): Promise<DeleteSessionMutation> {
    const statement = `mutation DeleteSession($input: DeleteSessionInput!, $condition: ModelSessionConditionInput) {
        deleteSession(input: $input, condition: $condition) {
          __typename
          id
          files {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          fileSize
          password
          passwordProtected
          mailInfo {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          linkInfo {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          backdrop {
            __typename
            items {
              __typename
              id
              SessionID
              S3Object {
                __typename
                key
                bucket
                region
                relativePath
                size
                extension
                mimetype
                identifier
              }
              static
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          shortUrl
          expiry
          SentOn
          updatedOn
          sessionMailInfoId
          sessionLinkInfoId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSessionMutation>response.data.deleteSession;
  }
  async CreateRecipients(
    input: CreateRecipientsInput,
    condition?: ModelRecipientsConditionInput
  ): Promise<CreateRecipientsMutation> {
    const statement = `mutation CreateRecipients($input: CreateRecipientsInput!, $condition: ModelRecipientsConditionInput) {
        createRecipients(input: $input, condition: $condition) {
          __typename
          id
          recipient
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRecipientsMutation>response.data.createRecipients;
  }
  async UpdateRecipients(
    input: UpdateRecipientsInput,
    condition?: ModelRecipientsConditionInput
  ): Promise<UpdateRecipientsMutation> {
    const statement = `mutation UpdateRecipients($input: UpdateRecipientsInput!, $condition: ModelRecipientsConditionInput) {
        updateRecipients(input: $input, condition: $condition) {
          __typename
          id
          recipient
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRecipientsMutation>response.data.updateRecipients;
  }
  async DeleteRecipients(
    input: DeleteRecipientsInput,
    condition?: ModelRecipientsConditionInput
  ): Promise<DeleteRecipientsMutation> {
    const statement = `mutation DeleteRecipients($input: DeleteRecipientsInput!, $condition: ModelRecipientsConditionInput) {
        deleteRecipients(input: $input, condition: $condition) {
          __typename
          id
          recipient
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRecipientsMutation>response.data.deleteRecipients;
  }
  async UpdateMailInfo(
    input: UpdateMailInfoInput,
    condition?: ModelMailInfoConditionInput
  ): Promise<UpdateMailInfoMutation> {
    const statement = `mutation UpdateMailInfo($input: UpdateMailInfoInput!, $condition: ModelMailInfoConditionInput) {
        updateMailInfo(input: $input, condition: $condition) {
          __typename
          id
          FromEmail
          Recipients
          Cc
          Bcc
          Subject
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMailInfoMutation>response.data.updateMailInfo;
  }
  async DeleteMailInfo(
    input: DeleteMailInfoInput,
    condition?: ModelMailInfoConditionInput
  ): Promise<DeleteMailInfoMutation> {
    const statement = `mutation DeleteMailInfo($input: DeleteMailInfoInput!, $condition: ModelMailInfoConditionInput) {
        deleteMailInfo(input: $input, condition: $condition) {
          __typename
          id
          FromEmail
          Recipients
          Cc
          Bcc
          Subject
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMailInfoMutation>response.data.deleteMailInfo;
  }
  async UpdateLinkInfo(
    input: UpdateLinkInfoInput,
    condition?: ModelLinkInfoConditionInput
  ): Promise<UpdateLinkInfoMutation> {
    const statement = `mutation UpdateLinkInfo($input: UpdateLinkInfoInput!, $condition: ModelLinkInfoConditionInput) {
        updateLinkInfo(input: $input, condition: $condition) {
          __typename
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLinkInfoMutation>response.data.updateLinkInfo;
  }
  async DeleteLinkInfo(
    input: DeleteLinkInfoInput,
    condition?: ModelLinkInfoConditionInput
  ): Promise<DeleteLinkInfoMutation> {
    const statement = `mutation DeleteLinkInfo($input: DeleteLinkInfoInput!, $condition: ModelLinkInfoConditionInput) {
        deleteLinkInfo(input: $input, condition: $condition) {
          __typename
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLinkInfoMutation>response.data.deleteLinkInfo;
  }
  async CreateBackdrop(
    input: CreateBackdropInput,
    condition?: ModelBackdropConditionInput
  ): Promise<CreateBackdropMutation> {
    const statement = `mutation CreateBackdrop($input: CreateBackdropInput!, $condition: ModelBackdropConditionInput) {
        createBackdrop(input: $input, condition: $condition) {
          __typename
          id
          SessionID
          S3Object {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          static
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBackdropMutation>response.data.createBackdrop;
  }
  async UpdateBackdrop(
    input: UpdateBackdropInput,
    condition?: ModelBackdropConditionInput
  ): Promise<UpdateBackdropMutation> {
    const statement = `mutation UpdateBackdrop($input: UpdateBackdropInput!, $condition: ModelBackdropConditionInput) {
        updateBackdrop(input: $input, condition: $condition) {
          __typename
          id
          SessionID
          S3Object {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          static
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBackdropMutation>response.data.updateBackdrop;
  }
  async DeleteBackdrop(
    input: DeleteBackdropInput,
    condition?: ModelBackdropConditionInput
  ): Promise<DeleteBackdropMutation> {
    const statement = `mutation DeleteBackdrop($input: DeleteBackdropInput!, $condition: ModelBackdropConditionInput) {
        deleteBackdrop(input: $input, condition: $condition) {
          __typename
          id
          SessionID
          S3Object {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          static
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBackdropMutation>response.data.deleteBackdrop;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          email
          name
          preferred_username
          subscriptionPlan {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          subscriptionPlansType
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async CreateSubscriptionPlan(
    input: CreateSubscriptionPlanInput,
    condition?: ModelSubscriptionPlanConditionInput
  ): Promise<CreateSubscriptionPlanMutation> {
    const statement = `mutation CreateSubscriptionPlan($input: CreateSubscriptionPlanInput!, $condition: ModelSubscriptionPlanConditionInput) {
        createSubscriptionPlan(input: $input, condition: $condition) {
          __typename
          id
          subscriptionPlansType
          user {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSubscriptionPlanMutation>response.data.createSubscriptionPlan;
  }
  async CreateSession(
    input: CreateSessionInput,
    condition?: ModelSessionConditionInput
  ): Promise<CreateSessionMutation> {
    const statement = `mutation CreateSession($input: CreateSessionInput!, $condition: ModelSessionConditionInput) {
        createSession(input: $input, condition: $condition) {
          __typename
          id
          files {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          fileSize
          password
          passwordProtected
          mailInfo {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          linkInfo {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          backdrop {
            __typename
            items {
              __typename
              id
              SessionID
              S3Object {
                __typename
                key
                bucket
                region
                relativePath
                size
                extension
                mimetype
                identifier
              }
              static
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          shortUrl
          expiry
          SentOn
          updatedOn
          sessionMailInfoId
          sessionLinkInfoId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSessionMutation>response.data.createSession;
  }
  async CreateMailInfo(
    input: CreateMailInfoInput,
    condition?: ModelMailInfoConditionInput
  ): Promise<CreateMailInfoMutation> {
    const statement = `mutation CreateMailInfo($input: CreateMailInfoInput!, $condition: ModelMailInfoConditionInput) {
        createMailInfo(input: $input, condition: $condition) {
          __typename
          id
          FromEmail
          Recipients
          Cc
          Bcc
          Subject
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMailInfoMutation>response.data.createMailInfo;
  }
  async CreateLinkInfo(
    input: CreateLinkInfoInput,
    condition?: ModelLinkInfoConditionInput
  ): Promise<CreateLinkInfoMutation> {
    const statement = `mutation CreateLinkInfo($input: CreateLinkInfoInput!, $condition: ModelLinkInfoConditionInput) {
        createLinkInfo(input: $input, condition: $condition) {
          __typename
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLinkInfoMutation>response.data.createLinkInfo;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          email
          name
          preferred_username
          subscriptionPlan {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          subscriptionPlansType
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetSubscriptionPlan(id: string): Promise<GetSubscriptionPlanQuery> {
    const statement = `query GetSubscriptionPlan($id: ID!) {
        getSubscriptionPlan(id: $id) {
          __typename
          id
          subscriptionPlansType
          user {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSubscriptionPlanQuery>response.data.getSubscriptionPlan;
  }
  async ListSubscriptionPlans(
    filter?: ModelSubscriptionPlanFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSubscriptionPlansQuery> {
    const statement = `query ListSubscriptionPlans($filter: ModelSubscriptionPlanFilterInput, $limit: Int, $nextToken: String) {
        listSubscriptionPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSubscriptionPlansQuery>response.data.listSubscriptionPlans;
  }
  async GetRecipients(id: string): Promise<GetRecipientsQuery> {
    const statement = `query GetRecipients($id: ID!) {
        getRecipients(id: $id) {
          __typename
          id
          recipient
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRecipientsQuery>response.data.getRecipients;
  }
  async ListRecipients(
    filter?: ModelRecipientsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRecipientsQuery> {
    const statement = `query ListRecipients($filter: ModelRecipientsFilterInput, $limit: Int, $nextToken: String) {
        listRecipients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            recipient
            SentOn
            updatedOn
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRecipientsQuery>response.data.listRecipients;
  }
  async GetSession(id: string): Promise<GetSessionQuery> {
    const statement = `query GetSession($id: ID!) {
        getSession(id: $id) {
          __typename
          id
          files {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          fileSize
          password
          passwordProtected
          mailInfo {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          linkInfo {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          backdrop {
            __typename
            items {
              __typename
              id
              SessionID
              S3Object {
                __typename
                key
                bucket
                region
                relativePath
                size
                extension
                mimetype
                identifier
              }
              static
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          shortUrl
          expiry
          SentOn
          updatedOn
          sessionMailInfoId
          sessionLinkInfoId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSessionQuery>response.data.getSession;
  }
  async ListSessions(
    filter?: ModelSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSessionsQuery> {
    const statement = `query ListSessions($filter: ModelSessionFilterInput, $limit: Int, $nextToken: String) {
        listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            files {
              __typename
              key
              bucket
              region
              relativePath
              size
              extension
              mimetype
              identifier
            }
            fileSize
            password
            passwordProtected
            mailInfo {
              __typename
              id
              FromEmail
              Recipients
              Cc
              Bcc
              Subject
              Title
              Message
              SentOn
              updatedOn
              owner
            }
            linkInfo {
              __typename
              id
              Title
              Message
              SentOn
              updatedOn
              owner
            }
            backdrop {
              __typename
              items {
                __typename
                id
                SessionID
                S3Object {
                  __typename
                  key
                  bucket
                  region
                  relativePath
                  size
                  extension
                  mimetype
                  identifier
                }
                static
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            shortUrl
            expiry
            SentOn
            updatedOn
            sessionMailInfoId
            sessionLinkInfoId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSessionsQuery>response.data.listSessions;
  }
  async GetMailInfo(id: string): Promise<GetMailInfoQuery> {
    const statement = `query GetMailInfo($id: ID!) {
        getMailInfo(id: $id) {
          __typename
          id
          FromEmail
          Recipients
          Cc
          Bcc
          Subject
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMailInfoQuery>response.data.getMailInfo;
  }
  async ListMailInfos(
    filter?: ModelMailInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMailInfosQuery> {
    const statement = `query ListMailInfos($filter: ModelMailInfoFilterInput, $limit: Int, $nextToken: String) {
        listMailInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMailInfosQuery>response.data.listMailInfos;
  }
  async GetLinkInfo(id: string): Promise<GetLinkInfoQuery> {
    const statement = `query GetLinkInfo($id: ID!) {
        getLinkInfo(id: $id) {
          __typename
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLinkInfoQuery>response.data.getLinkInfo;
  }
  async ListLinkInfos(
    filter?: ModelLinkInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLinkInfosQuery> {
    const statement = `query ListLinkInfos($filter: ModelLinkInfoFilterInput, $limit: Int, $nextToken: String) {
        listLinkInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLinkInfosQuery>response.data.listLinkInfos;
  }
  async GetBackdrop(id: string): Promise<GetBackdropQuery> {
    const statement = `query GetBackdrop($id: ID!) {
        getBackdrop(id: $id) {
          __typename
          id
          SessionID
          S3Object {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          static
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBackdropQuery>response.data.getBackdrop;
  }
  async ListBackdrops(
    filter?: ModelBackdropFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBackdropsQuery> {
    const statement = `query ListBackdrops($filter: ModelBackdropFilterInput, $limit: Int, $nextToken: String) {
        listBackdrops(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            SessionID
            S3Object {
              __typename
              key
              bucket
              region
              relativePath
              size
              extension
              mimetype
              identifier
            }
            static
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBackdropsQuery>response.data.listBackdrops;
  }
  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onCreateUser(filter: $filter, owner: $owner) {
          __typename
          id
          email
          name
          preferred_username
          subscriptionPlan {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          subscriptionPlansType
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onUpdateUser(filter: $filter, owner: $owner) {
          __typename
          id
          email
          name
          preferred_username
          subscriptionPlan {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          subscriptionPlansType
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onDeleteUser(filter: $filter, owner: $owner) {
          __typename
          id
          email
          name
          preferred_username
          subscriptionPlan {
            __typename
            id
            subscriptionPlansType
            user {
              __typename
              id
              email
              name
              preferred_username
              subscriptionPlan {
                __typename
                id
                subscriptionPlansType
                user {
                  __typename
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    __typename
                    id
                    subscriptionPlansType
                    user {
                      __typename
                      id
                      email
                      name
                      preferred_username
                      subscriptionPlan {
                        __typename
                        id
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        subscriptionPlanUserId
                        owner
                      }
                      subscriptionPlansType
                      createdAt
                      updatedAt
                      userSubscriptionPlanId
                      owner
                    }
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                    owner
                  }
                  subscriptionPlansType
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
                owner
              }
              subscriptionPlansType
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
            owner
          }
          subscriptionPlansType
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateSubscriptionPlanListener(
    filter?: ModelSubscriptionSubscriptionPlanFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateSubscriptionPlan">
    >
  > {
    const statement = `subscription OnCreateSubscriptionPlan($filter: ModelSubscriptionSubscriptionPlanFilterInput, $owner: String) {
        onCreateSubscriptionPlan(filter: $filter, owner: $owner) {
          __typename
          id
          subscriptionPlansType
          user {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateSubscriptionPlan">
      >
    >;
  }

  OnUpdateSubscriptionPlanListener(
    filter?: ModelSubscriptionSubscriptionPlanFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateSubscriptionPlan">
    >
  > {
    const statement = `subscription OnUpdateSubscriptionPlan($filter: ModelSubscriptionSubscriptionPlanFilterInput, $owner: String) {
        onUpdateSubscriptionPlan(filter: $filter, owner: $owner) {
          __typename
          id
          subscriptionPlansType
          user {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateSubscriptionPlan">
      >
    >;
  }

  OnDeleteSubscriptionPlanListener(
    filter?: ModelSubscriptionSubscriptionPlanFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteSubscriptionPlan">
    >
  > {
    const statement = `subscription OnDeleteSubscriptionPlan($filter: ModelSubscriptionSubscriptionPlanFilterInput, $owner: String) {
        onDeleteSubscriptionPlan(filter: $filter, owner: $owner) {
          __typename
          id
          subscriptionPlansType
          user {
            __typename
            id
            email
            name
            preferred_username
            subscriptionPlan {
              __typename
              id
              subscriptionPlansType
              user {
                __typename
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  __typename
                  id
                  subscriptionPlansType
                  user {
                    __typename
                    id
                    email
                    name
                    preferred_username
                    subscriptionPlan {
                      __typename
                      id
                      subscriptionPlansType
                      user {
                        __typename
                        id
                        email
                        name
                        preferred_username
                        subscriptionPlansType
                        createdAt
                        updatedAt
                        userSubscriptionPlanId
                        owner
                      }
                      createdAt
                      updatedAt
                      subscriptionPlanUserId
                      owner
                    }
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                  owner
                }
                subscriptionPlansType
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
              owner
            }
            subscriptionPlansType
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteSubscriptionPlan">
      >
    >;
  }

  OnCreateRecipientsListener(
    filter?: ModelSubscriptionRecipientsFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRecipients">>
  > {
    const statement = `subscription OnCreateRecipients($filter: ModelSubscriptionRecipientsFilterInput, $owner: String) {
        onCreateRecipients(filter: $filter, owner: $owner) {
          __typename
          id
          recipient
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRecipients">>
    >;
  }

  OnUpdateRecipientsListener(
    filter?: ModelSubscriptionRecipientsFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRecipients">>
  > {
    const statement = `subscription OnUpdateRecipients($filter: ModelSubscriptionRecipientsFilterInput, $owner: String) {
        onUpdateRecipients(filter: $filter, owner: $owner) {
          __typename
          id
          recipient
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRecipients">>
    >;
  }

  OnDeleteRecipientsListener(
    filter?: ModelSubscriptionRecipientsFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRecipients">>
  > {
    const statement = `subscription OnDeleteRecipients($filter: ModelSubscriptionRecipientsFilterInput, $owner: String) {
        onDeleteRecipients(filter: $filter, owner: $owner) {
          __typename
          id
          recipient
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRecipients">>
    >;
  }

  OnCreateSessionListener(
    filter?: ModelSubscriptionSessionFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSession">>
  > {
    const statement = `subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput, $owner: String) {
        onCreateSession(filter: $filter, owner: $owner) {
          __typename
          id
          files {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          fileSize
          password
          passwordProtected
          mailInfo {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          linkInfo {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          backdrop {
            __typename
            items {
              __typename
              id
              SessionID
              S3Object {
                __typename
                key
                bucket
                region
                relativePath
                size
                extension
                mimetype
                identifier
              }
              static
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          shortUrl
          expiry
          SentOn
          updatedOn
          sessionMailInfoId
          sessionLinkInfoId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSession">>
    >;
  }

  OnUpdateSessionListener(
    filter?: ModelSubscriptionSessionFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSession">>
  > {
    const statement = `subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput, $owner: String) {
        onUpdateSession(filter: $filter, owner: $owner) {
          __typename
          id
          files {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          fileSize
          password
          passwordProtected
          mailInfo {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          linkInfo {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          backdrop {
            __typename
            items {
              __typename
              id
              SessionID
              S3Object {
                __typename
                key
                bucket
                region
                relativePath
                size
                extension
                mimetype
                identifier
              }
              static
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          shortUrl
          expiry
          SentOn
          updatedOn
          sessionMailInfoId
          sessionLinkInfoId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSession">>
    >;
  }

  OnDeleteSessionListener(
    filter?: ModelSubscriptionSessionFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSession">>
  > {
    const statement = `subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput, $owner: String) {
        onDeleteSession(filter: $filter, owner: $owner) {
          __typename
          id
          files {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          fileSize
          password
          passwordProtected
          mailInfo {
            __typename
            id
            FromEmail
            Recipients
            Cc
            Bcc
            Subject
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          linkInfo {
            __typename
            id
            Title
            Message
            SentOn
            updatedOn
            owner
          }
          backdrop {
            __typename
            items {
              __typename
              id
              SessionID
              S3Object {
                __typename
                key
                bucket
                region
                relativePath
                size
                extension
                mimetype
                identifier
              }
              static
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          shortUrl
          expiry
          SentOn
          updatedOn
          sessionMailInfoId
          sessionLinkInfoId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSession">>
    >;
  }

  OnCreateMailInfoListener(
    filter?: ModelSubscriptionMailInfoFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMailInfo">>
  > {
    const statement = `subscription OnCreateMailInfo($filter: ModelSubscriptionMailInfoFilterInput, $owner: String) {
        onCreateMailInfo(filter: $filter, owner: $owner) {
          __typename
          id
          FromEmail
          Recipients
          Cc
          Bcc
          Subject
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMailInfo">>
    >;
  }

  OnUpdateMailInfoListener(
    filter?: ModelSubscriptionMailInfoFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMailInfo">>
  > {
    const statement = `subscription OnUpdateMailInfo($filter: ModelSubscriptionMailInfoFilterInput, $owner: String) {
        onUpdateMailInfo(filter: $filter, owner: $owner) {
          __typename
          id
          FromEmail
          Recipients
          Cc
          Bcc
          Subject
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMailInfo">>
    >;
  }

  OnDeleteMailInfoListener(
    filter?: ModelSubscriptionMailInfoFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMailInfo">>
  > {
    const statement = `subscription OnDeleteMailInfo($filter: ModelSubscriptionMailInfoFilterInput, $owner: String) {
        onDeleteMailInfo(filter: $filter, owner: $owner) {
          __typename
          id
          FromEmail
          Recipients
          Cc
          Bcc
          Subject
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMailInfo">>
    >;
  }

  OnCreateLinkInfoListener(
    filter?: ModelSubscriptionLinkInfoFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLinkInfo">>
  > {
    const statement = `subscription OnCreateLinkInfo($filter: ModelSubscriptionLinkInfoFilterInput, $owner: String) {
        onCreateLinkInfo(filter: $filter, owner: $owner) {
          __typename
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLinkInfo">>
    >;
  }

  OnUpdateLinkInfoListener(
    filter?: ModelSubscriptionLinkInfoFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLinkInfo">>
  > {
    const statement = `subscription OnUpdateLinkInfo($filter: ModelSubscriptionLinkInfoFilterInput, $owner: String) {
        onUpdateLinkInfo(filter: $filter, owner: $owner) {
          __typename
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLinkInfo">>
    >;
  }

  OnDeleteLinkInfoListener(
    filter?: ModelSubscriptionLinkInfoFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLinkInfo">>
  > {
    const statement = `subscription OnDeleteLinkInfo($filter: ModelSubscriptionLinkInfoFilterInput, $owner: String) {
        onDeleteLinkInfo(filter: $filter, owner: $owner) {
          __typename
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLinkInfo">>
    >;
  }

  OnCreateBackdropListener(
    filter?: ModelSubscriptionBackdropFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBackdrop">>
  > {
    const statement = `subscription OnCreateBackdrop($filter: ModelSubscriptionBackdropFilterInput, $owner: String) {
        onCreateBackdrop(filter: $filter, owner: $owner) {
          __typename
          id
          SessionID
          S3Object {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          static
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBackdrop">>
    >;
  }

  OnUpdateBackdropListener(
    filter?: ModelSubscriptionBackdropFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBackdrop">>
  > {
    const statement = `subscription OnUpdateBackdrop($filter: ModelSubscriptionBackdropFilterInput, $owner: String) {
        onUpdateBackdrop(filter: $filter, owner: $owner) {
          __typename
          id
          SessionID
          S3Object {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          static
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBackdrop">>
    >;
  }

  OnDeleteBackdropListener(
    filter?: ModelSubscriptionBackdropFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBackdrop">>
  > {
    const statement = `subscription OnDeleteBackdrop($filter: ModelSubscriptionBackdropFilterInput, $owner: String) {
        onDeleteBackdrop(filter: $filter, owner: $owner) {
          __typename
          id
          SessionID
          S3Object {
            __typename
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
            identifier
          }
          static
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBackdrop">>
    >;
  }
}
