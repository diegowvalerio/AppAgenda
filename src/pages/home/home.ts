import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Contato } from '../../model/contato';
import { ContatoService } from '../../service/contato.service';
import { CrudContato } from '../crud-contato/crud-contato';
import { CadastrarContatoPage } from '../cadastrar-contato/cadastrar-contato';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private contato: Contato = new Contato();
  contatos: Observable<Contato[]>

  constructor(public navCtrl: NavController, private contatoService: ContatoService, private admobFree: AdMobFree, private platform: Platform) {
    this.contatos= this.contatoService.getContatos().valueChanges();
    this.mostrarPublicidadeBanner();
    }

    mostrarPublicidadeBanner(){
      if(this.platform.is('android')){
        const bannerConfig: AdMobFreeBannerConfig = {
          // add your config here
          // for the sake of this example we will just use the test config
          id: 'ca-app-pub-3925364440483118/7374418480',
          isTesting: true,
          autoShow: true
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
      }
    }

  converterNumber(numero): number {
  return parseFloat(numero);
}

cadastrar(){
  this.navCtrl.push(CadastrarContatoPage);
}

editarRemover(contatoEdR: Contato){
  this.navCtrl.push(CrudContato, { contato: contatoEdR });
}

}
