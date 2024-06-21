

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userRole: string | null = null; // Assurez-vous que userRole est correctement déclaré ici
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {

    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getSessionRole();

    // Souscrire aux changements du rôle utilisateur
    this.authService.userRole$.subscribe(role => {
      this.userRole = role;
    });
  }


  logout(): void {
    this.authService.logout();
}
}