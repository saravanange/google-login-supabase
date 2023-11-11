# google-login-supabase


1. npx create-expo-app -t tutorial-expo-login
2.npm run android
3.npx expo install @react-native-google-signin/google-signin
4.npx expo run:android  

Add supabase
1.npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill
2.npx supabase init 


Configuration --update token
-------------------
1. Auth.js   ---webClientId
2.Update strings.xml --android client id
3. android/app/debug.keystore --pwd:android
3. update config.toml -- web client id and provider as google


--------DEBUG-----------
netstat -ano | findstr :8081
taskkill /F /PID 2976

npm cache clean --force

expo r -c
npm install -g expo-cli
rm -rf node_modules
rm package-lock.json  # or yarn.lock
npm install


expo start -c
expo r -c
expo update
expo diagnostics
expo r --clear
expo build:android
expo doctor --fix-dependencies
expo install expo-splash-screen@~0.20.5

npm install -g eas-cli
eas build -p android ---------------https://docs.expo.dev/build/setup/
./gradlew --refresh-dependencies
