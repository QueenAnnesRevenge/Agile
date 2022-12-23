import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherTournoiComponent } from './pages/afficher-tournoi/afficher-tournoi.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  {path: 'afficherTournoi', component:AfficherTournoiComponent},
  {path: 'profil', component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
