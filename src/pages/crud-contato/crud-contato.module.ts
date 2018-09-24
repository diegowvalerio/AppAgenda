import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudContato } from './crud-contato';
import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    CrudContato,
  ],
  imports: [
    IonicPageModule.forChild(CrudContato),
  ],
})
export class CrudContatoModule {}
