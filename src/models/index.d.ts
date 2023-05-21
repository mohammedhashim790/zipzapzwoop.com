import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum SubscriptionPlanType {
  BASIC = "BASIC",
  STANDARD = "STANDARD",
  PROFESSIONAL = "PROFESSIONAL"
}

type EagerS3Object = {
  readonly key: string;
  readonly bucket: string;
  readonly region: string;
  readonly relativePath: string;
  readonly size?: string | null;
  readonly extension?: string | null;
  readonly mimetype?: string | null;
  readonly identifier: string;
}

type LazyS3Object = {
  readonly key: string;
  readonly bucket: string;
  readonly region: string;
  readonly relativePath: string;
  readonly size?: string | null;
  readonly extension?: string | null;
  readonly mimetype?: string | null;
  readonly identifier: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubscriptionPlanMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'SentOn' | 'updatedOn';
}

type RecipientsMetaData = {
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

type EagerUser = {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly preferred_username: string;
  readonly subscriptionPlan?: SubscriptionPlan | null;
  readonly subscriptionPlansType: SubscriptionPlanType | keyof typeof SubscriptionPlanType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSubscriptionPlanId?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly preferred_username: string;
  readonly subscriptionPlan: AsyncItem<SubscriptionPlan | undefined>;
  readonly subscriptionPlansType: SubscriptionPlanType | keyof typeof SubscriptionPlanType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSubscriptionPlanId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerSubscriptionPlan = {
  readonly id: string;
  readonly subscriptionPlansType: SubscriptionPlanType | keyof typeof SubscriptionPlanType;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubscriptionPlan = {
  readonly id: string;
  readonly subscriptionPlansType: SubscriptionPlanType | keyof typeof SubscriptionPlanType;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SubscriptionPlan = LazyLoading extends LazyLoadingDisabled ? EagerSubscriptionPlan : LazySubscriptionPlan

export declare const SubscriptionPlan: (new (init: ModelInit<SubscriptionPlan, SubscriptionPlanMetaData>) => SubscriptionPlan) & {
  copyOf(source: SubscriptionPlan, mutator: (draft: MutableModel<SubscriptionPlan, SubscriptionPlanMetaData>) => MutableModel<SubscriptionPlan, SubscriptionPlanMetaData> | void): SubscriptionPlan;
}

type EagerSession = {
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
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
  readonly sessionMailInfoId?: string | null;
  readonly sessionLinkInfoId?: string | null;
}

type LazySession = {
  readonly id: string;
  readonly files?: (S3Object | null)[] | null;
  readonly fileSize?: string | null;
  readonly password?: string | null;
  readonly passwordProtected?: boolean | null;
  readonly mailInfo: AsyncItem<MailInfo | undefined>;
  readonly linkInfo: AsyncItem<LinkInfo | undefined>;
  readonly backdrop: AsyncCollection<Backdrop>;
  readonly shortUrl?: string | null;
  readonly expiry?: number | null;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
  readonly sessionMailInfoId?: string | null;
  readonly sessionLinkInfoId?: string | null;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session, SessionMetaData>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}

type EagerRecipients = {
  readonly id: string;
  readonly recipient: string;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
}

type LazyRecipients = {
  readonly id: string;
  readonly recipient: string;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
}

export declare type Recipients = LazyLoading extends LazyLoadingDisabled ? EagerRecipients : LazyRecipients

export declare const Recipients: (new (init: ModelInit<Recipients, RecipientsMetaData>) => Recipients) & {
  copyOf(source: Recipients, mutator: (draft: MutableModel<Recipients, RecipientsMetaData>) => MutableModel<Recipients, RecipientsMetaData> | void): Recipients;
}

type EagerMailInfo = {
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
}

type LazyMailInfo = {
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
}

export declare type MailInfo = LazyLoading extends LazyLoadingDisabled ? EagerMailInfo : LazyMailInfo

export declare const MailInfo: (new (init: ModelInit<MailInfo, MailInfoMetaData>) => MailInfo) & {
  copyOf(source: MailInfo, mutator: (draft: MutableModel<MailInfo, MailInfoMetaData>) => MutableModel<MailInfo, MailInfoMetaData> | void): MailInfo;
}

type EagerLinkInfo = {
  readonly id: string;
  readonly Title: string;
  readonly Message: string;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
}

type LazyLinkInfo = {
  readonly id: string;
  readonly Title: string;
  readonly Message: string;
  readonly SentOn?: string | null;
  readonly updatedOn?: string | null;
}

export declare type LinkInfo = LazyLoading extends LazyLoadingDisabled ? EagerLinkInfo : LazyLinkInfo

export declare const LinkInfo: (new (init: ModelInit<LinkInfo, LinkInfoMetaData>) => LinkInfo) & {
  copyOf(source: LinkInfo, mutator: (draft: MutableModel<LinkInfo, LinkInfoMetaData>) => MutableModel<LinkInfo, LinkInfoMetaData> | void): LinkInfo;
}

type EagerBackdrop = {
  readonly id: string;
  readonly SessionID: string;
  readonly S3Object: S3Object;
  readonly static: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBackdrop = {
  readonly id: string;
  readonly SessionID: string;
  readonly S3Object: S3Object;
  readonly static: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Backdrop = LazyLoading extends LazyLoadingDisabled ? EagerBackdrop : LazyBackdrop

export declare const Backdrop: (new (init: ModelInit<Backdrop, BackdropMetaData>) => Backdrop) & {
  copyOf(source: Backdrop, mutator: (draft: MutableModel<Backdrop, BackdropMetaData>) => MutableModel<Backdrop, BackdropMetaData> | void): Backdrop;
}