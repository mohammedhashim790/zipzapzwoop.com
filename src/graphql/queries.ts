/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      preferred_username
      subscriptionPlan {
        id
        subscriptionPlansType
        user {
          id
          email
          name
          preferred_username
          subscriptionPlan {
            id
            subscriptionPlansType
            user {
              id
              email
              name
              preferred_username
              subscriptionPlan {
                id
                subscriptionPlansType
                user {
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    id
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                  }
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
              }
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
          }
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
        createdAt
        updatedAt
        subscriptionPlanUserId
      }
      createdAt
      updatedAt
      userSubscriptionPlanId
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        preferred_username
        subscriptionPlan {
          id
          subscriptionPlansType
          user {
            id
            email
            name
            preferred_username
            subscriptionPlan {
              id
              subscriptionPlansType
              user {
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  id
                  subscriptionPlansType
                  user {
                    id
                    email
                    name
                    preferred_username
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                }
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
            }
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
        }
        createdAt
        updatedAt
        userSubscriptionPlanId
        owner
      }
      nextToken
    }
  }
`;
export const getSubscriptionPlan = /* GraphQL */ `
  query GetSubscriptionPlan($id: ID!) {
    getSubscriptionPlan(id: $id) {
      id
      subscriptionPlansType
      user {
        id
        email
        name
        preferred_username
        subscriptionPlan {
          id
          subscriptionPlansType
          user {
            id
            email
            name
            preferred_username
            subscriptionPlan {
              id
              subscriptionPlansType
              user {
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  id
                  subscriptionPlansType
                  user {
                    id
                    email
                    name
                    preferred_username
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                }
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
            }
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
        }
        createdAt
        updatedAt
        userSubscriptionPlanId
        owner
      }
      createdAt
      updatedAt
      subscriptionPlanUserId
    }
  }
`;
export const listSubscriptionPlans = /* GraphQL */ `
  query ListSubscriptionPlans(
    $filter: ModelSubscriptionPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subscriptionPlansType
        user {
          id
          email
          name
          preferred_username
          subscriptionPlan {
            id
            subscriptionPlansType
            user {
              id
              email
              name
              preferred_username
              subscriptionPlan {
                id
                subscriptionPlansType
                user {
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    id
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                  }
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
              }
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
          }
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
        createdAt
        updatedAt
        subscriptionPlanUserId
      }
      nextToken
    }
  }
`;
export const getRecipients = /* GraphQL */ `
  query GetRecipients($id: ID!) {
    getRecipients(id: $id) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const listRecipients = /* GraphQL */ `
  query ListRecipients(
    $filter: ModelRecipientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipient
        SentOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      files {
        key
        bucket
        region
        relativePath
        size
        extension
        mimetype
      }
      fileSize
      password
      passwordProtected
      mailInfo {
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
        id
        Title
        Message
        SentOn
        updatedOn
        owner
      }
      backdrop {
        items {
          id
          SessionID
          S3Object {
            key
            bucket
            region
            relativePath
            size
            extension
            mimetype
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
      user {
        id
        email
        name
        preferred_username
        subscriptionPlan {
          id
          subscriptionPlansType
          user {
            id
            email
            name
            preferred_username
            subscriptionPlan {
              id
              subscriptionPlansType
              user {
                id
                email
                name
                preferred_username
                subscriptionPlan {
                  id
                  subscriptionPlansType
                  user {
                    id
                    email
                    name
                    preferred_username
                    createdAt
                    updatedAt
                    userSubscriptionPlanId
                    owner
                  }
                  createdAt
                  updatedAt
                  subscriptionPlanUserId
                }
                createdAt
                updatedAt
                userSubscriptionPlanId
                owner
              }
              createdAt
              updatedAt
              subscriptionPlanUserId
            }
            createdAt
            updatedAt
            userSubscriptionPlanId
            owner
          }
          createdAt
          updatedAt
          subscriptionPlanUserId
        }
        createdAt
        updatedAt
        userSubscriptionPlanId
        owner
      }
      SentOn
      updatedOn
      sessionMailInfoId
      sessionLinkInfoId
      sessionUserId
      owner
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        files {
          key
          bucket
          region
          relativePath
          size
          extension
          mimetype
        }
        fileSize
        password
        passwordProtected
        mailInfo {
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
          id
          Title
          Message
          SentOn
          updatedOn
          owner
        }
        backdrop {
          items {
            id
            SessionID
            S3Object {
              key
              bucket
              region
              relativePath
              size
              extension
              mimetype
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
        user {
          id
          email
          name
          preferred_username
          subscriptionPlan {
            id
            subscriptionPlansType
            user {
              id
              email
              name
              preferred_username
              subscriptionPlan {
                id
                subscriptionPlansType
                user {
                  id
                  email
                  name
                  preferred_username
                  subscriptionPlan {
                    id
                    subscriptionPlansType
                    createdAt
                    updatedAt
                    subscriptionPlanUserId
                  }
                  createdAt
                  updatedAt
                  userSubscriptionPlanId
                  owner
                }
                createdAt
                updatedAt
                subscriptionPlanUserId
              }
              createdAt
              updatedAt
              userSubscriptionPlanId
              owner
            }
            createdAt
            updatedAt
            subscriptionPlanUserId
          }
          createdAt
          updatedAt
          userSubscriptionPlanId
          owner
        }
        SentOn
        updatedOn
        sessionMailInfoId
        sessionLinkInfoId
        sessionUserId
        owner
      }
      nextToken
    }
  }
`;
export const getMailInfo = /* GraphQL */ `
  query GetMailInfo($id: ID!) {
    getMailInfo(id: $id) {
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
  }
`;
export const listMailInfos = /* GraphQL */ `
  query ListMailInfos(
    $filter: ModelMailInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMailInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const getLinkInfo = /* GraphQL */ `
  query GetLinkInfo($id: ID!) {
    getLinkInfo(id: $id) {
      id
      Title
      Message
      SentOn
      updatedOn
      owner
    }
  }
`;
export const listLinkInfos = /* GraphQL */ `
  query ListLinkInfos(
    $filter: ModelLinkInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinkInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Title
        Message
        SentOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getBackdrop = /* GraphQL */ `
  query GetBackdrop($id: ID!) {
    getBackdrop(id: $id) {
      id
      SessionID
      S3Object {
        key
        bucket
        region
        relativePath
        size
        extension
        mimetype
      }
      static
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBackdrops = /* GraphQL */ `
  query ListBackdrops(
    $filter: ModelBackdropFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBackdrops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        SessionID
        S3Object {
          key
          bucket
          region
          relativePath
          size
          extension
          mimetype
        }
        static
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
