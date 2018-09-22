import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB7aYTx1KoB_onLUZQ1T0wrjF3STD2m_K4",
  authDomain: "hellofirebase-8b323.firebaseapp.com",
  databaseURL: "https://hellofirebase-8b323.firebaseio.com",
  projectId: "hellofirebase-8b323",
  storageBucket: "hellofirebase-8b323.appspot.com",
  messagingSenderId: "195608664678"

  };

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
