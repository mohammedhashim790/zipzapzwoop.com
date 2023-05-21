/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const updateSubscriptionPlan = /* GraphQL */ `
  mutation UpdateSubscriptionPlan(
    $input: UpdateSubscriptionPlanInput!
    $condition: ModelSubscriptionPlanConditionInput
  ) {
    updateSubscriptionPlan(input: $input, condition: $condition) {
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
export const deleteSubscriptionPlan = /* GraphQL */ `
  mutation DeleteSubscriptionPlan(
    $input: DeleteSubscriptionPlanInput!
    $condition: ModelSubscriptionPlanConditionInput
  ) {
    deleteSubscriptionPlan(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
export const createRecipients = /* GraphQL */ `
  mutation CreateRecipients(
    $input: CreateRecipientsInput!
    $condition: ModelRecipientsConditionInput
  ) {
    createRecipients(input: $input, condition: $condition) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const updateRecipients = /* GraphQL */ `
  mutation UpdateRecipients(
    $input: UpdateRecipientsInput!
    $condition: ModelRecipientsConditionInput
  ) {
    updateRecipients(input: $input, condition: $condition) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const deleteRecipients = /* GraphQL */ `
  mutation DeleteRecipients(
    $input: DeleteRecipientsInput!
    $condition: ModelRecipientsConditionInput
  ) {
    deleteRecipients(input: $input, condition: $condition) {
      id
      recipient
      SentOn
      updatedOn
      owner
    }
  }
`;
export const updateMailInfo = /* GraphQL */ `
  mutation UpdateMailInfo(
    $input: UpdateMailInfoInput!
    $condition: ModelMailInfoConditionInput
  ) {
    updateMailInfo(input: $input, condition: $condition) {
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
export const deleteMailInfo = /* GraphQL */ `
  mutation DeleteMailInfo(
    $input: DeleteMailInfoInput!
    $condition: ModelMailInfoConditionInput
  ) {
    deleteMailInfo(input: $input, condition: $condition) {
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
export const updateLinkInfo = /* GraphQL */ `
  mutation UpdateLinkInfo(
    $input: UpdateLinkInfoInput!
    $condition: ModelLinkInfoConditionInput
  ) {
    updateLinkInfo(input: $input, condition: $condition) {
      id
      Title
      Message
      SentOn
      updatedOn
      owner
    }
  }
`;
export const deleteLinkInfo = /* GraphQL */ `
  mutation DeleteLinkInfo(
    $input: DeleteLinkInfoInput!
    $condition: ModelLinkInfoConditionInput
  ) {
    deleteLinkInfo(input: $input, condition: $condition) {
      id
      Title
      Message
      SentOn
      updatedOn
      owner
    }
  }
`;
export const createBackdrop = /* GraphQL */ `
  mutation CreateBackdrop(
    $input: CreateBackdropInput!
    $condition: ModelBackdropConditionInput
  ) {
    createBackdrop(input: $input, condition: $condition) {
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
export const updateBackdrop = /* GraphQL */ `
  mutation UpdateBackdrop(
    $input: UpdateBackdropInput!
    $condition: ModelBackdropConditionInput
  ) {
    updateBackdrop(input: $input, condition: $condition) {
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
export const deleteBackdrop = /* GraphQL */ `
  mutation DeleteBackdrop(
    $input: DeleteBackdropInput!
    $condition: ModelBackdropConditionInput
  ) {
    deleteBackdrop(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const createSubscriptionPlan = /* GraphQL */ `
  mutation CreateSubscriptionPlan(
    $input: CreateSubscriptionPlanInput!
    $condition: ModelSubscriptionPlanConditionInput
  ) {
    createSubscriptionPlan(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const createMailInfo = /* GraphQL */ `
  mutation CreateMailInfo(
    $input: CreateMailInfoInput!
    $condition: ModelMailInfoConditionInput
  ) {
    createMailInfo(input: $input, condition: $condition) {
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
export const createLinkInfo = /* GraphQL */ `
  mutation CreateLinkInfo(
    $input: CreateLinkInfoInput!
    $condition: ModelLinkInfoConditionInput
  ) {
    createLinkInfo(input: $input, condition: $condition) {
      id
      Title
      Message
      SentOn
      updatedOn
      owner
    }
  }
`;
