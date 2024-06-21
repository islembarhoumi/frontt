import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  note: any ;

  avisList = [
   
    { nomPatient: 'Mensieur Ammar ', commentaire: 'Excellent médecin, très compétent.(Dr molka ayedi (dermathologue))'  },
    { nomPatient: 'Madamme islem', commentaire: 'Très bon service, je recommande.(Dr Nada selmi (pédiatre))' },
    { nomPatient: 'Patient Mahdi', commentaire: 'A eu une expérience formidable ici.(Dr Rihem kahla (ophtalmologue))' },
    { nomPatient: 'Maladie Jammel', commentaire: 'Médcin non compétent .(Dr Mohamed ayoubi radiologue))' },
    { nomPatient: 'Mensieur Ali ', commentaire: 'Excellent médecin, très compétent.(Dr Nada selmi (pédiatre))' }, 
  ];

  constructor() { }

  ngOnInit(): void {
  }



  toggleStar(avis: any, index: number): void {
    // Si la note est déjà sélectionnée, déselectionne-la
    if (avis.note === index + 1) {
      avis.note = 0;
    } else {
      // Sinon, met à jour la note
      avis.note = index + 1;
    }
  }
}
