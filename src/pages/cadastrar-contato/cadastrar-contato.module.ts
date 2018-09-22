import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarContatoPage } from './cadastrar-contato';

@NgModule({
  declarations: [
    CadastrarContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarContatoPage),
  ],
})
export class CadastrarContatoPageModule {}
