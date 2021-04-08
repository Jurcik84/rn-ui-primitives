
// @flow
import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry, Platform } from 'react-native';
// import codePush from 'react-native-code-push';



import App from './App';
import { name as appName } from './app.json';

// const codePushKeys = Platform.select({
//     ios: {
//         STAGING: "OlYTGsrvZasFxg_WlfM_V08YGSPnBmrbEr74W",
//         PRODUCTION: "75imiRnIMBfl7F4IslToYULl9iMw2DF1CQjE5"
//     },
//     android: {
//         STAGING: "OlYTGsrvZasFxg_WlfM_V08YGSPnBmrbEr74W",
//         PRODUCTION: "75imiRnIMBfl7F4IslToYULl9iMw2DF1CQjE5"
//     } 
// });

// const isBetaUser = true;

// const CodePushiedApp = codePush({
//     deploymentKey: isBetaUser ? codePushKeys.STAGING : codePushKeys.PRODUCTION,
//     checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//     installMode: codePush.InstallMode.ON_NEXT_RESUME
// })(App);

AppRegistry.registerComponent(appName, () => App);






// jaspar@weareassist.com
// Me to Everyone (1:14 pm)
// Juraj Hynek
// 42 Hilldrop Road, N70JE
// juraj.hynek@gmail.com


// if(__DEV__) {
//     import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
//   };