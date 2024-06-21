import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userRole: string | null = null;
    isLoggedIn: boolean = false;
    user : any ; 

  constructor( private authService : AuthService ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getSessionRole();
    this.authService.userRole$.subscribe(role => {
      this.userRole = role;
    });
    this.authService.authenticatedUser$.subscribe((userData: any) => {
      // Vérifiez si les données sont correctement récupérées
      console.log(userData); // Assurez-vous que les données sont correctes
      if (userData) {
        // Assurez-vous que les données sont correctement intégrées dans l'objet user
        this.user = userData;
      }
    });

const authenticatedUser = localStorage.getItem('authenticatedUser');
  if (authenticatedUser) {
    this.user = JSON.parse(authenticatedUser);
  }

}
}
