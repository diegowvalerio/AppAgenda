import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Contato } from '../../model/contato';
import { ContatoService } from '../../service/contato.service';

import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the EditarImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud-contato',
  templateUrl: 'crud-contato.html',
})
export class CrudContato {
  private contato: Contato = new Contato();

  constructor(public navCtrl: NavController, public navParams: NavParams, public contatoService: ContatoService, private admobFree: AdMobFree, private platform: Platform) {
    this.contato = this.navParams.get("contato");
    this.mostrarPublicidadeInterstital();
  }

  mostrarPublicidadeInterstital(){
    if(this.platform.is('android')){
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
      //  id:'ca-app-pub-3925364440483118/3243601781',
      id:'ca-app-pub-3940256099942544/8691691433',
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
    console.log('ionViewDidLoad CrudContato');
  }

  converterNumber(numero): number {
    return parseFloat(numero);
  }

  alterarContato(){
    this.contatoService.updateContato(this.contato);
    this.navCtrl.pop();
  }

  removerContato(){
    this.contatoService.removeContato(this.contato);
    this.navCtrl.pop();
  }

}
