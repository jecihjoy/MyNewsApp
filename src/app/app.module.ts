import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SportsPage } from '../pages/sports/sports';
import { TechPage } from '../pages/tech/tech';
import { GooglePage } from '../pages/google/google';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { RateusPage } from '../pages/rateus/rateus';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/newsservice/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SportsPage,
    TechPage,
    GooglePage,
    EntertainmentPage,
    AboutPage,
    ContactPage,
    RateusPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SportsPage,
    TechPage,
    GooglePage,
    EntertainmentPage,
    AboutPage,
    ContactPage,
    RateusPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
