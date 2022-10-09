export enum cognitoAUTH{
  MFA,
  SMS_MFA,
  InvalidCred,
  UserNotFound,
  Success,
  NEW_PASSWORD_REQUIRED,
  Password_Reset_Required,
  FAILED,
  NotAuthorizedException,
  UserNotConfirmedException
}

export enum cognitoSignUpException{
  CodeDeliveryFailureException,
  InternalErrorException,
  InvalidEmailRoleAccessPolicyException,
  InvalidLambdaResponseException,
  InvalidParameterException,
  InvalidPasswordException,
  InvalidSmsRoleAccessPolicyException,
  InvalidSmsRoleTrustRelationshipException,
  NotAuthorizedException,
  ResourceNotFoundException,
  TooManyRequestsException,
  UnexpectedLambdaException,
  UserLambdaValidationException,
  UsernameExistsException,
  SUCCESS,
  FAILED,
}

export enum confirmSignUpException{
  AliasExistsException,
  CodeMismatchException,
  ExpiredCodeException,
  InternalErrorException,
  LimitExceededException,
  NotAuthorizedException,
  ResourceNotFoundException,
  TooManyFailedAttemptsException,
  TooManyRequestsException,
  UserNotFoundException,
  AuthError,
  SUCCESS,
  Failed,
}

export enum AppState{
  SignIn,
  New_Password_Required,
  MFA,
  SMS_MFA,
  SignUp,
  UserNotConfirmed
}
