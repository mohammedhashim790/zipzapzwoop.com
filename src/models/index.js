// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SubscriptionPlanType = {
  "BASIC": "BASIC",
  "STANDARD": "STANDARD",
  "PROFESSIONAL": "PROFESSIONAL"
};

const { User, SubscriptionPlan, Session, Recipients, MailInfo, LinkInfo, Backdrop, S3Object } = initSchema(schema);

export {
  User,
  SubscriptionPlan,
  Session,
  Recipients,
  MailInfo,
  LinkInfo,
  Backdrop,
  SubscriptionPlanType,
  S3Object
};