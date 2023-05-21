/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
  }
`;
export const onCreateSubscriptionPlan = /* GraphQL */ `
  subscription OnCreateSubscriptionPlan(
    $filter: ModelSubscriptionSubscriptionPlanFilterInput
    $owner: String
  ) {
    onCreateSubscriptionPlan(filter: $filter, owner: $owner) {
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
  }
`;
export const onUpdateSubscriptionPlan = /* GraphQL */ `
  subscription OnUpdateSubscriptionPlan(
    $filter: ModelSubscriptionSubscriptionPlanFilterInput
    $owner: String
  ) {
    onUpdateSubscriptionPlan(filter: $filter, owner: $owner) {
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
  }
`;
export const onDeleteSubscriptionPlan = /* GraphQL */ `
  subscription OnDeleteSubscriptionPlan(
    $filter: ModelSubscriptionSubscriptionPlanFilterInput
    $owner: String
  ) {
    onDeleteSubscriptionPlan(filter: $filter, owner: $owner) {
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
  }
`;
export const onCreateRecipients = /* GraphQL */ `
  subscription OnCreateRecipients(
    $filter: ModelSubscriptionRecipientsFilterInput
    $owner: String
  ) {
    onCreateRecipients(filter: $filter, owner: $owner) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onUpdateRecipients = /* GraphQL */ `
  subscription OnUpdateRecipients(
    $filter: ModelSubscriptionRecipientsFilterInput
    $owner: String
  ) {
    onUpdateRecipients(filter: $filter, owner: $owner) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onDeleteRecipients = /* GraphQL */ `
  subscription OnDeleteRecipients(
    $filter: ModelSubscriptionRecipientsFilterInput
    $owner: String
  ) {
    onDeleteRecipients(filter: $filter, owner: $owner) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onCreateSession(filter: $filter, owner: $owner) {
      id
      files {
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
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onUpdateSession(filter: $filter, owner: $owner) {
      id
      files {
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
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onDeleteSession(filter: $filter, owner: $owner) {
      id
      files {
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
  }
`;
export const onCreateMailInfo = /* GraphQL */ `
  subscription OnCreateMailInfo(
    $filter: ModelSubscriptionMailInfoFilterInput
    $owner: String
  ) {
    onCreateMailInfo(filter: $filter, owner: $owner) {
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
export const onUpdateMailInfo = /* GraphQL */ `
  subscription OnUpdateMailInfo(
    $filter: ModelSubscriptionMailInfoFilterInput
    $owner: String
  ) {
    onUpdateMailInfo(filter: $filter, owner: $owner) {
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
export const onDeleteMailInfo = /* GraphQL */ `
  subscription OnDeleteMailInfo(
    $filter: ModelSubscriptionMailInfoFilterInput
    $owner: String
  ) {
    onDeleteMailInfo(filter: $filter, owner: $owner) {
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
export const onCreateLinkInfo = /* GraphQL */ `
  subscription OnCreateLinkInfo(
    $filter: ModelSubscriptionLinkInfoFilterInput
    $owner: String
  ) {
    onCreateLinkInfo(filter: $filter, owner: $owner) {
      id
      Title
      Message
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onUpdateLinkInfo = /* GraphQL */ `
  subscription OnUpdateLinkInfo(
    $filter: ModelSubscriptionLinkInfoFilterInput
    $owner: String
  ) {
    onUpdateLinkInfo(filter: $filter, owner: $owner) {
      id
      Title
      Message
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onDeleteLinkInfo = /* GraphQL */ `
  subscription OnDeleteLinkInfo(
    $filter: ModelSubscriptionLinkInfoFilterInput
    $owner: String
  ) {
    onDeleteLinkInfo(filter: $filter, owner: $owner) {
      id
      Title
      Message
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onCreateBackdrop = /* GraphQL */ `
  subscription OnCreateBackdrop(
    $filter: ModelSubscriptionBackdropFilterInput
    $owner: String
  ) {
    onCreateBackdrop(filter: $filter, owner: $owner) {
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
        identifier
      }
      static
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBackdrop = /* GraphQL */ `
  subscription OnUpdateBackdrop(
    $filter: ModelSubscriptionBackdropFilterInput
    $owner: String
  ) {
    onUpdateBackdrop(filter: $filter, owner: $owner) {
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
        identifier
      }
      static
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBackdrop = /* GraphQL */ `
  subscription OnDeleteBackdrop(
    $filter: ModelSubscriptionBackdropFilterInput
    $owner: String
  ) {
    onDeleteBackdrop(filter: $filter, owner: $owner) {
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
        identifier
      }
      static
      createdAt
      updatedAt
      owner
    }
  }
`;
