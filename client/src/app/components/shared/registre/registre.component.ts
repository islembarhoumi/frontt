import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {

  registrationForm: FormGroup;
  selectedRole: any;
  


  constructor( private fb: FormBuilder,
    private inscriptionService: AuthService, ) {
      this.registrationForm = this.fb.group({
        nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      adresse: [''],
      telephone: [''],
      role: ['', Validators.required],
      specialite: [''], // Champ de spécialité pour le médecin
      experience: [''], // Champ d'expérience pour le médecin
      anneeExperience: [''], // Champ d'expérience pour le médecin
      maladie: [''],    // Champ de maladie pour le patient
      allergie: [''],   // Champ d'allergie pour le patient
      terms: [false, Validators.requiredTrue]
    });
      
    
  }

 
  onSubmit() {
    const formData = this.registrationForm.value;
    this.inscriptionService.inscrireUtilisateur(formData).subscribe(
      (response) => {
        console.log(response);
      
        // Additional logic if needed
      },
      (error) => {
        console.error(error);
        // Handle errors, display error message, etc.
      }
    );
  }

  
  
  onRoleChange(event: any) {
    this.selectedRole = event.target.value;
  }
}
