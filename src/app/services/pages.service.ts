import { Injectable } from '@angular/core';
import { PersonneI } from '../modeles/page-i';
import { Firestore, collection, getDocs} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  // Creation des peronnes pour les tests 

  

  listPersonnes: Array<PersonneI> = [];

  constructor(private bdd:Firestore) { }

  async getFirePersonnel(){
    await getDocs(collection(this.bdd, 'personnes'))
    .then(personne => {
      console.log("test 1",personne);
      personne.forEach(p => {
        console.log(p.id, p.data());
        this.listPersonnes.push(p.data() as PersonneI);
      })
    })
    .catch(erreur => console.log("Erreur", erreur));
  }

}
