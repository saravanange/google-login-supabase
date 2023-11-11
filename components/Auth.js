import React from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { supabase } from '../utils/supabase';

export default function GoogleSignIn() {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '21983707916-rj1hjsmg9lmbntm4cc5s5aep5hr74l6a.apps.googleusercontent.com',
  });

  return React.createElement(GoogleSigninButton, {
    size: GoogleSigninButton.Size.Wide,
    color: GoogleSigninButton.Color.Dark,
    onPress: async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(JSON.stringify(userInfo, null, 2));

        if (userInfo.idToken) {
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: userInfo.idToken,
          });
<<<<<<< HEAD
          if (error) {
            console.error('Error fetching data:', error.message);
          }
=======

>>>>>>> f6b5227986ebc2364eefe198d7d9a08f34b26769
          console.log(error, data);
        } else {
          throw new Error('No Id token present');
        }
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    },
  });
}
