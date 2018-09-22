import { Injectable } from '@angular/core';
import { Contato } from '../model/contato';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ContatoService{
  itemsCollection: AngularFirestoreCollection<Contato> = this.afs.collection<Contato>('contato');

  constructor(private afs: AngularFirestore){}
    getContatos(){
      return this.itemsCollection;
    }
    addContato(contato: Contato){
      const id= this.afs.createId();
      contato.key =id;
      this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(contato)));
    }
    updateContato(contato: Contato){
      return this.itemsCollection.doc(contato.key).update(contato);
    }
    removeContato(contato: Contato){
      return this.itemsCollection.doc(contato.key).delete();
    }
}
