# Zoom Video SDK web sample

Use of this sample app is subject to our [Terms of Use](https://explore.zoom.us/en/video-sdk-terms/).

The [Zoom Video SDK for web](https://developers.zoom.us/docs/video-sdk/web/) enables you to build custom video experiences on a webpage with Zoom's core technology through a highly optimized WebAssembly module.

![Zoom Video SDK](./public/images/videosdk.gif)

## Installation

To get started, clone the repo:

`$ git clone https://github.com/zoom/videosdk-web-sample.git`

## Setup

1. Once cloned, navigate to the `videosdk-web-sample` directory:

   `$ cd videosdk-web-sample`

1. Then install the dependencies:

   `$ npm install`

1. Open the directory in your code editor.

1. Open the `src/config/dev.ts` file and enter required session values for the variables:

   | Key                   | Value Description |
   | -----------------------|-------------|
   | `sdkKey`     | Your Video SDK Key. Required. |
   | `sdkSecret`  | Your Video SDK Secret. Required. |
   | `topic`      | Required, a session name of your choice or the name of the session you are joining. |
   | `name`       | Required, a name for the participant. |
   | `password`   | Required, a session passcode of your choice or the passcode of the session you are joining. |

   Example:

   ```js
   {
     // ...
     sdkKey: 'YOUR_VIDEO_SDK_KEY',
     sdkSecret: 'YOUR_VIDEO_SDK_SECRET',
     topic: 'Cool Cars',
     name: 'user123',
     password: 'abc123'
     // ...
   }
   ```

   > Reminder to not publish this sample app as is. Replace the Video SDK JWT generator with a [backend Video SDK JWT generator](https://developers.zoom.us/docs/video-sdk/auth/#generate-a-video-sdk-jwt) to keep your SDK Secret safe.

1. Save `dev.ts`.

1. Run the app:

   `$ npm start`

## Usage

1. Navigate to http://localhost:3000 and click one of the feature boxes.

   > Learn more about [rendering multiple video streams](https://developers.zoom.us/docs/video-sdk/web/gallery-view/).

For the full list of features and event listeners, as well as additional guides, see our [Video SDK docs](https://developers.zoom.us/docs/video-sdk/web/).

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://explore.zoom.us/docs/en-us/developer-support-plans.html) plans.
# zoom-video-sdk-1.10.8
# Zoom-videosdk-1.10
# Zoom-videosdk-1.10
