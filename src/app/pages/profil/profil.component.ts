import { Component, OnInit } from '@angular/core';
//import * as console from 'console';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})


export class ProfilComponent implements OnInit {
 
  constructor(public pageS: PagesService){}

  ngOnInit(){
    console.log(this.pageS.listPersonnes);
    this.pageS.getFirePersonnel();
  }
}


