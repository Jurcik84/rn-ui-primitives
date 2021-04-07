import {useEffect} from 'react';
import {Linking} from 'react-native';
const appleMapUrl = 'calshow:514300000';

// web b
// https://stackoverflow.com

// phone
//tel:1-408-555-5555

// Email
// mailto:email@example.com

// SMS
//sms:1-408-555-1212

// apple maps
// http://maps.apple.com/?ll=37.484847,-122.148386

//  Google Maps
// geo:37.7749,-122.4194
// Google

// iTunes
// See iTunes Link Maker
// Apple
// Facebook
// fb://profile
// Stack Overflow
// YouTube
// http://www.youtube.com/v/oHg5SJYRHA0
// Apple
// Facetime
// facetime://user@example.com
// Apple
// iOS Calendar
// calshow:514300000 [1]

//OPEN APP FRON APP
export const useOpenInApp = () => {
  useEffect(() => {
    Linking.canOpenURL(appleMapUrl)
      .then((supported: boolean) => {
        if (!supported) {
          console.log('Unsupported URL: ' + appleMapUrl);
        } else {
          return Linking.openURL(appleMapUrl);
        }
      })
      .catch((err: {}) => console.error('An error occurred ', err));
  }, []);

  // detet if app was lanched from another app
  useEffect(() => {
    const url = Linking.getInitialURL()
      .then((url) => {
        if (url) {
          console.log('Initial url is: ' + url);
        }
      })
      .catch((err) => console.error('An error occurred ', err));
  }, []);
};
