import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrudContato } from './crud-contato';

@NgModule({
  declarations: [
    CrudContato,
  ],
  imports: [
    IonicPageModule.forChild(CrudContato),
  ],
})
export class CrudContatoModule {}
