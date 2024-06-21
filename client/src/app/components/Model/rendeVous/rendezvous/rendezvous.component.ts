import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/services/medcin.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezVousComponent implements OnInit {
  medecinsList: any[] = [];
  rendezvous: any = {
    date: '',
    heure: '',
    statut: '',
    medcin: { id: 0 } , // Assurez-vous que medecin est un objet complet, pas seulement l'ID
    etat: 'nonconfirmé',
  }
  constructor(private medcinService: MedecinService, private rendezVousService: RendezVousService) { }
  ngOnInit(): void {
    this.loadMedecinsList();
  }
  loadMedecinsList() {
    this.medcinService.getAllMedcin().subscribe((medcins: any[]) => {
      this.medecinsList = medcins;
    });
  }
  submitForm() {
    Swal.fire({
      title: "Voulez-vous vraiment enregistrer le rendez-vous?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Enregistrer",
      cancelButtonText: "Annuler"
    }).then((result) => {
      if (result.isConfirmed) {
        // L'utilisateur a confirmé l'enregistrement
        this.rendezVousService.saveRendezVous(this.rendezvous)
          .subscribe(
            response => {
              Swal.fire("Rendez-vous enregistré avec succès!", "", "success");
              console.log('Rendez-vous enregistré avec succès', response);
              // Effectuez des actions supplémentaires si nécessaire
            },
            error => {
              Swal.fire("Erreur lors de l'enregistrement du rendez-vous", "", "error");
              console.error('Erreur lors de l\'enregistrement du rendez-vous', error);
              // Gérez les erreurs de manière appropriée
            }
          );
      } else {
        Swal.fire("Les modifications n'ont pas été enregistrées", "", "info");
      }
    });
  }
  
}

