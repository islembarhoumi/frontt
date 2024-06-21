import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SecretaireService } from 'src/app/services/secretaire.service';


@Component({
  selector: 'app-list-secretaire',
  templateUrl: './list-secretaire.component.html',
  styleUrls: ['./list-secretaire.component.css']
})
export class ListSecretaireComponent implements OnInit {
  selectedMedecin: any = null;
  medecinToUpdate: any = {};
  secretaireAssociee: any = null;

  Secretaires: any;

  constructor(private secretaireService: SecretaireService, private authService: AuthService) { }
  ngOnInit(): void {
    this.getSecretaire();

    this.secretaireAssociee = this.authService.getAuthenticatedUserDetails().secretaire;
  }
  getSecretaire(): void {
    this.secretaireService.getAllsecretaires().subscribe((Secretaires) => {
      this.Secretaires = Secretaires.map((Secretaire: any) => {
        return { ...Secretaire, likes: 0 };
      });
    });
  }
  incrementLikes(secretaire: any): void {
    secretaire.likes++;
  }
  decrementLikes(secretaire: any): void {
    if (secretaire.likes > 0) {
      secretaire.likes--;
    }
  }
  toggleLike(secretaire: any): void {
    if (secretaire.likes > 0) {
      this.decrementLikes(secretaire);
    } else {
      this.incrementLikes(secretaire);
    }
  }


}
