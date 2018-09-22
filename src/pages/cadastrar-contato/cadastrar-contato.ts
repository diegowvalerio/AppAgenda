import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Contato } from '../../model/contato';
import { ContatoService } from '../../service/contato.service';

import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the CadastrarContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-contato',
  templateUrl: 'cadastrar-contato.html',
})
export class CadastrarContatoPage {
  private contato: Contato = new Contato();

  constructor(public navCtrl: NavController, public navParams: NavParams, public contatoService: ContatoService, private admobFree: AdMobFree, private platform: Platform) {
    this.mostrarPublicidadeInterstital();
  }

  mostrarPublicidadeInterstital(){
    if(this.platform.is('android')){
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        id:'ca-app-pub-3925364440483118/5295050058',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarContatoPage');
  }

  cadastrarContato(){
 this.contatoService.addContato(this.contato);
 this.navCtrl.pop();
}

}
