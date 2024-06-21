import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrls: ['./list-rendez-vous.component.css']
})
export class ListRendezVousComponent implements OnInit {

  rendezvousList: any[] = [];

  selectedRendez: any = null;
  RendezToUpdate: any = {};






  constructor(private rendezVousService: RendezVousService) { }
  ngOnInit(): void {
    this.loadRendezvousList();
  }
  loadRendezvousList() {
    this.rendezVousService.getAllRendezVous().subscribe((rendezvous: any[]) => {
      // Formater les dates pour les rendre lisibles
      this.rendezvousList = rendezvous.map(rendezvous => {
        const formattedDate = new Date(rendezvous.date).toLocaleDateString('fr-FR');
        return { ...rendezvous, date: formattedDate };
      });
    });
  }
  toggleDetails(rendezvous: any) {
    rendezvous.showDetails = !rendezvous.showDetails;
  }
  accepterRendezVous(rendezvous: any) {
    if (confirm('Voulez-vous vraiment accepter ce rendez-vous ?')) {
        rendezvous.etat = 'confirme';
        this.updateRendezVous(rendezvous);
    }
}
  annulerRendezVous(rendezvous: any) {
    if (confirm('Voulez-vous vraiment annuler ce rendez-vous ?')) {
      rendezvous.etat = 'nonconfirme';
      this.updateRendezVous(rendezvous);
    }
  }
  updateRendezVous(rendezvous: any) {
    // Créer une nouvelle date au format ISO (yyyy-MM-dd)
    const formattedDate = new Date(rendezvous.date).toISOString().split('T')[0];
    // Copier le rendez-vous et mettre à jour la date formatée
    const updatedRendezvous = { ...rendezvous, date: formattedDate };
    this.rendezVousService.updateRendezVouss(updatedRendezvous).subscribe(
      response => {
        console.log('Rendez-vous mis à jour avec succès', response);
        // Effectuez des actions supplémentaires si nécessaire
      },
      error => {
        console.error('Erreur lors de la mise à jour du rendez-vous', error);
        // Gérez les erreurs de manière appropriée
      }
    );;
  }
  updateRendezVouss(): void {
    this.rendezVousService.updateRendezVous(this.RendezToUpdate.id, this.RendezToUpdate).subscribe(() => {
      this.selectedRendez = null;
      this.loadRendezvousList(); // Rafraîchit la liste après la mise à jour
      Swal.fire({
        title: "Good job!",
        text: "Modification avec succeés",
        icon: "success"
      });
    });
  }

  editRendezVous(rendezvous: any): void {
    this.selectedRendez = rendezvous;
    // Mettre à jour le médecin à mettre à jour avec les données du médecin sélectionné
    this.RendezToUpdate = { ...rendezvous };
  }





}










