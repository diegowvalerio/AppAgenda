import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrudContato } from '../pages/crud-contato/crud-contato';
import { CadastrarContatoPage } from '../pages/cadastrar-contato/cadastrar-contato';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ContatoService } from '../service/contato.service';
import { AdMobFree, AdMobFreeInterstitialConfig, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

const config = {
  apiKey: "AIzaSyB7aYTx1KoB_onLUZQ1T0wrjF3STD2m_K4",
  authDomain: "hellofirebase-8b323.firebaseapp.com",
  databaseURL: "https://hellofirebase-8b323.firebaseio.com",
  projectId: "hellofirebase-8b323",
  storageBucket: "hellofirebase-8b323.appspot.com",
  messagingSenderId: "195608664678"

  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrudContato,
    CadastrarContatoPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrudContato,
    CadastrarContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatoService,
    AdMobFree
  ]
})
export class AppModule {}
