import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { PersonneI } from '../modeles/page-i';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user : PersonneI = <PersonneI>{};
  constructor(private bdd:Firestore) { }

  async checkUsersByName(mail : string) {
    console.log('dans la fonction checking');

    const users = doc(this.bdd, "personnes", mail as string);
    let test = getDoc(users);
    this.user = (await test).data() as PersonneI;
    console.log(this.user);
    return this.user
  }

}
