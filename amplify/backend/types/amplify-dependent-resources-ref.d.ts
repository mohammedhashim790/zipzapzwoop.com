export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "zipzapzwoopauth": {
            "HostedUIDomain": "string",
            "OAuthMetadata": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "zipzapzwoop": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "zipzapzwoopTransferStorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}