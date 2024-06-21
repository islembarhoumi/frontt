import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistreComponent } from './components/shared/registre/registre.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AjoutsalaireComponent } from './components/Model/salaire/ajoutsalaire/ajoutsalaire.component';
import { ListMedcinComponent } from './components/Model/medcin/list-medcin/list-medcin.component';
import { ListSecretaireComponent } from './components/Model/secretaire/list-secretaire/list-secretaire.component';

import { RendezVousComponent } from './components/Model/rendeVous/rendezvous/rendezvous.component';
import { ListRendezVousComponent } from './components/Model/rendeVous/list-rendez-vous/list-rendez-vous.component';
import { ProfilComponent } from './components/shared/profil/profil.component';
import { MessageComponent } from './components/shared/message/message.component';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { SalleComponent } from './components/Model/salle/salle.component';
import { AvisComponent } from './components/avis/avis.component';
import { AcceuilComponent } from './components/shared/acceuil/acceuil.component';



const routes: Routes = [
  { path: 'login', component:  LoginComponent},
  { path: 'Register', component: RegistreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'payer', component: AjoutsalaireComponent },
  { path: 'listmed', component: ListMedcinComponent },
  { path: 'listsec', component: ListSecretaireComponent },
  { path: 'rendez', component: RendezVousComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'listpatien', component: ListPatientComponent },
  { path: '', redirectTo: '/acc', pathMatch: 'full' },
  { path: 'secretaire', component: ListSecretaireComponent },
  { path: 'rendlist', component: ListRendezVousComponent},
  { path: 'msg', component: MessageComponent},
  { path: 'salle', component: SalleComponent},
  { path: 'av', component: AvisComponent},
  { path: 'acc', component: AcceuilComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
