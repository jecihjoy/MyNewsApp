import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


//keytool -genkey -v -keystore YourApp.keystore -alias YourApp -keyalg RSA -keysize 2048 -validity 10000
//$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
//this key will be used for making updates
//jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
// zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
//https://stackoverflow.com/questions/29874564/ionic-build-android-error-when-download-gradle