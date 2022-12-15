import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonneI } from 'src/app/modeles/page-i';

import { ProfilComponent } from './profil.component';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;
  let joueur: PersonneI = {
    nom :"toto",
    prenom: "titi",
    pseudo: "toto_tit",
    sexe: "M",
    mdp: "toto",
    mail: "toto@toto.com",
    tel: 65589658, 
    statut:"joueur"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test about player created
  it('testing name of player', () => {
    expect(component.pageS.listPersonnes[0].nom).toBe("toto");
  });

  it('testing mail of player', () => {
    expect(component.pageS.listPersonnes[0].mail).toBe("tittoto@toto.com");
  });

  it('testing statut of player', () => {
    expect(component.pageS.listPersonnes[0].statut).toBe("joueur");
  });

  // test about gerant created
  it('testing name of player', () => {
    expect(component.pageS.listPersonnes[0].nom).toBe("Jojo");
  });

  it('testing mail of player', () => {
    expect(component.pageS.listPersonnes[0].sexe).toBe("M");
  });

  it('testing statut of player', () => {
    expect(component.pageS.listPersonnes[0].statut).toBe("admin");
  });

});
