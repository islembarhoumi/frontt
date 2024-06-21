import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistreComponent } from './components/shared/registre/registre.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/shared/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { AjoutsalaireComponent } from './components/Model/salaire/ajoutsalaire/ajoutsalaire.component';



import { RendezVousComponent } from './components/Model/rendeVous/rendezvous/rendezvous.component';

import { ListMedcinComponent } from './components/Model/medcin/list-medcin/list-medcin.component';
import { ListSecretaireComponent } from './components/Model/secretaire/list-secretaire/list-secretaire.component';
import { ListRendezVousComponent } from './components/Model/rendeVous/list-rendez-vous/list-rendez-vous.component';
import { AlerteComponent } from './components/error/alerte/alerte.component';
import { ProfilComponent } from './components/shared/profil/profil.component';
import { AvisComponent } from './components/avis/avis.component';
import { MessageComponent } from './components/shared/message/message.component';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { SalleComponent } from './components/Model/salle/salle.component';
import { AcceuilComponent } from './components/shared/acceuil/acceuil.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AjoutsalaireComponent,
    ListMedcinComponent,
    ListSecretaireComponent,
   ListPatientComponent,
    RendezVousComponent,
    ListRendezVousComponent,
    AlerteComponent,
    ProfilComponent,
    AvisComponent,
    MessageComponent,
    SalleComponent,
    AcceuilComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
