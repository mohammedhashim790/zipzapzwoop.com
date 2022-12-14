// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey:'https://zipzapzwoop-storage84110-dev.s3.ap-south-1.amazonaws.com/public/',
  downloadUrl:"http://streamer-dev.us-east-1.elasticbeanstalk.com/download",
  // emailApi:"https://jxv6vmv57hg53ekp3lfac5eany0acufk.lambda-url.ap-south-1.on.aws/",

  emailApi:"https://4vtoog5dbr2det7orjapfxjyvi0qbygl.lambda-url.ap-south-1.on.aws/",
  we:"https://we.zipzapzwoop.com/",
  linkTransfer:"z3transfer.com",
  stories:"stories.zipzapzwoop.com",
  media:"https://zipzapzwoop-storage84110-dev.s3.ap-south-1.amazonaws.com/public/res/public/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
