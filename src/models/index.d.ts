import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SubscriptionPlanType {
  BASIC = "BASIC",
  STANDARD = "STANDARD",
  PROFESSIONAL = "PROFESSIONAL"
}

export declare class S3Object {
  readonly key: string;
  readonly bucket: string;
  readonly region: string;
  readonly relativePath: string;
  readonly size?: string | null;
  readonly extension?: string | null;
  readonly mimetype?: string | null;
  constructor(init: ModelInit<S3Object>);
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubscriptionPlanMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'SentOn' | 'updatedOn';
}

type MailInfoMetaData = {
  readOnlyFields: 'SentOn' | 'updatedOn';
}

type LinkInfoMetaData = {
  readOnlyFields: 'SentOn' | 'updatedOn';
}

type BackdropMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecipientsMetaData = {
  readOnlyFields: 'SentOn' | 'updatedOn';
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly preferred_username: string;
  readonly subscriptionPlan?: SubscriptionPlan | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSubscriptionPlanId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class SubscriptionPlan {
  readonly id: string;
  readonly subscriptionPlansType: SubscriptionPlanType | keyof typeof SubscriptionPlanType;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SubscriptionPlan, SubscriptionPlanMetaData>);
  static copyOf(source: SubscriptionPlan, mutator: (draft: MutableModel<SubscriptionPlan, SubscriptionPlanMetaData>) => MutableModel<SubscriptionPlan, SubscriptionPlanMetaData> | void): SubscriptionPlan;
}

export declare class Session {
  readonly id: string;
  readonly files?: (S3Object | null)[] | null;
  readonly fileSize?: string | null;
  readonly password?: string | null;
  readonly passwordProtected?: boolean | null;
  readonly mailInfo?: MailInfo | null;
  readonly linkInfo?: LinkInfo | null;
  readonly backdrop?: (Backdrop | null)[] | null;
  readonly shortUrl?: string | null;
  readonly expiry?: number | null;
  readonly user?: User | null;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
  readonly sessionMailInfoId?: string | null;
  readonly sessionLinkInfoId?: string | null;
  readonly sessionUserId?: string | null;
  constructor(init: ModelInit<Session, SessionMetaData>);
  static copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}

export declare class MailInfo {
  readonly id: string;
  readonly FromEmail: string;
  readonly Recipients: (string | null)[];
  readonly Cc?: (string | null)[] | null;
  readonly Bcc?: (string | null)[] | null;
  readonly Subject: string;
  readonly Title: string;
  readonly Message: string;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
  constructor(init: ModelInit<MailInfo, MailInfoMetaData>);
  static copyOf(source: MailInfo, mutator: (draft: MutableModel<MailInfo, MailInfoMetaData>) => MutableModel<MailInfo, MailInfoMetaData> | void): MailInfo;
}

export declare class LinkInfo {
  readonly id: string;
  readonly Title: string;
  readonly Message: string;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
  constructor(init: ModelInit<LinkInfo, LinkInfoMetaData>);
  static copyOf(source: LinkInfo, mutator: (draft: MutableModel<LinkInfo, LinkInfoMetaData>) => MutableModel<LinkInfo, LinkInfoMetaData> | void): LinkInfo;
}

export declare class Backdrop {
  readonly id: string;
  readonly SessionID: string;
  readonly S3Object: S3Object;
  readonly static: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Backdrop, BackdropMetaData>);
  static copyOf(source: Backdrop, mutator: (draft: MutableModel<Backdrop, BackdropMetaData>) => MutableModel<Backdrop, BackdropMetaData> | void): Backdrop;
}

export declare class Recipients {
  readonly id: string;
  readonly recipient: string;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
  constructor(init: ModelInit<Recipients, RecipientsMetaData>);
  static copyOf(source: Recipients, mutator: (draft: MutableModel<Recipients, RecipientsMetaData>) => MutableModel<Recipients, RecipientsMetaData> | void): Recipients;
}