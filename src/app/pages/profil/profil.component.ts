import { Component, OnInit } from '@angular/core';
//import * as console from 'console';
import { PersonneI } from 'src/app/modeles/page-i';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})


export class ProfilComponent implements OnInit {

  personne: PersonneI = <PersonneI>{};
 
  constructor(public pageS: PagesService){}

  ngOnInit(){
    console.log(this.pageS.listPersonnes);
    this.pageS.getFirePersonnel();
  }

  checkId(){
    console.log(this.personne);
  }

}


