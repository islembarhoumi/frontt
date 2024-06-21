import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


  export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    IsAlert: boolean = false;
    constructor(
      private authService: AuthService,
      private fb: FormBuilder,
      private router: Router
    ) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
  ngOnInit(): void {
   
  }

  onSubmit() {
    // Vérifie si le formulaire est valide
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.authService.authenticate(formData).subscribe(
        (response) => {
          console.log(response);
          // Vérifie si la connexion est réussie
          if (response.success === 'true') {
            // Affiche l'alerte de connexion réussie
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Connected Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            // Redirige vers la page d'accueil si la connexion réussit
            this.router.navigate(['/profil']);
          } else {
            // Affiche l'alerte de connexion incorrecte
            Swal.fire({
              icon: 'warning',
              title: 'Incorrect Credentials',
              text: 'Please check your username and password.',
              confirmButtonText: 'OK'
            });
          }
        },
        (error) => {
          console.error(error);
          // Affiche l'alerte d'erreur en cas d'échec de la requête
          Swal.fire({
            icon: 'error',
            title: 'Incorrect Credentials',
            text: 'Please check your username and password',
            footer: '<a href="#">Why do I have this issue?</a>',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }



  OnAlerteOpen() {
    console.log('Alerte ouverte');
    this.IsAlert = true;
  }
  OnAlerteClose() {
    console.log('Alerte fermée');
    this.IsAlert = false;
  }   









}

  // Fonction pour traiter le changement de rôle
 
