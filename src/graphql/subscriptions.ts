/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateSubscriptionPlan = /* GraphQL */ `
  subscription OnCreateSubscriptionPlan {
    onCreateSubscriptionPlan {
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
export const onUpdateSubscriptionPlan = /* GraphQL */ `
  subscription OnUpdateSubscriptionPlan {
    onUpdateSubscriptionPlan {
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
export const onDeleteSubscriptionPlan = /* GraphQL */ `
  subscription OnDeleteSubscriptionPlan {
    onDeleteSubscriptionPlan {
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
export const onCreateRecipients = /* GraphQL */ `
  subscription OnCreateRecipients($owner: String) {
    onCreateRecipients(owner: $owner) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onUpdateRecipients = /* GraphQL */ `
  subscription OnUpdateRecipients($owner: String) {
    onUpdateRecipients(owner: $owner) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onDeleteRecipients = /* GraphQL */ `
  subscription OnDeleteRecipients($owner: String) {
    onDeleteRecipients(owner: $owner) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($owner: String) {
    onCreateSession(owner: $owner) {
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
      SentOn
      updatedOn
      sessionMailInfoId
      sessionLinkInfoId
      owner
    }
  }
`;
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($owner: String) {
    onUpdateSession(owner: $owner) {
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
      SentOn
      updatedOn
      sessionMailInfoId
      sessionLinkInfoId
      owner
    }
  }
`;
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($owner: String) {
    onDeleteSession(owner: $owner) {
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
      SentOn
      updatedOn
      sessionMailInfoId
      sessionLinkInfoId
      owner
    }
  }
`;
export const onCreateMailInfo = /* GraphQL */ `
  subscription OnCreateMailInfo($owner: String) {
    onCreateMailInfo(owner: $owner) {
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
  subscription OnUpdateMailInfo($owner: String) {
    onUpdateMailInfo(owner: $owner) {
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
  subscription OnDeleteMailInfo($owner: String) {
    onDeleteMailInfo(owner: $owner) {
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
  subscription OnCreateLinkInfo($owner: String) {
    onCreateLinkInfo(owner: $owner) {
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
  subscription OnUpdateLinkInfo($owner: String) {
    onUpdateLinkInfo(owner: $owner) {
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
  subscription OnDeleteLinkInfo($owner: String) {
    onDeleteLinkInfo(owner: $owner) {
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
  subscription OnCreateBackdrop($owner: String) {
    onCreateBackdrop(owner: $owner) {
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
export const onUpdateBackdrop = /* GraphQL */ `
  subscription OnUpdateBackdrop($owner: String) {
    onUpdateBackdrop(owner: $owner) {
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
export const onDeleteBackdrop = /* GraphQL */ `
  subscription OnDeleteBackdrop($owner: String) {
    onDeleteBackdrop(owner: $owner) {
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
