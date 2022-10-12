// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SubscriptionPlanType = {
  "BASIC": "BASIC",
  "STANDARD": "STANDARD",
  "PROFESSIONAL": "PROFESSIONAL"
};

const { User, SubscriptionPlan, Session, MailInfo, LinkInfo, Backdrop, Recipients, S3Object } = initSchema(schema);

export {
  User,
  SubscriptionPlan,
  Session,
  MailInfo,
  LinkInfo,
  Backdrop,
  Recipients,
  SubscriptionPlanType,
  S3Object
};