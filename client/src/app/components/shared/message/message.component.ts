import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  dynamicFields: string[] = [];

  messageObject = {
    numeroTelephone: '',
    nom: '',
    objet: '',
    message: '',
    dateSent: '' // Ajout de la propriété dateSent
  };

  messageSentDetails: any; // Variable pour stocker les détails du message envoyé

  constructor(
    protected http: HttpClient ) { }

  ngOnInit(): void {
  }

  sendSMS(): void {
    //const accountSid = 'AC515f4b3213cca9c550cb33bef30b5e66';
    //const authToken = '12cfed625143fe6f88fa9120949a79f4';

    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const body = new URLSearchParams({
      To: this.messageObject.numeroTelephone,
      From: '+14256203180', // Votre numéro Twilio ici
      Body: `Hello Madam/Sir, ${this.messageObject.nom}, we are informing you that ${this.messageObject.message} , thank you !`,
    });

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', `Basic ${btoa(`${accountSid}:${authToken}`)}`);

    this.http.post(url, body.toString(), { headers }).subscribe(
      (response: any) => {
        console.log('SMS envoyé avec succès', response);
        this.messageSentDetails = response; // Stockage des détails de réponse dans la variable
        // Ajout des détails du message envoyé dans le message affiché
        this.messageObject.dateSent = response.date_created;
      },
      (error) => {
        console.error('Échec de l\'envoi du SMS :', error);
      }
    );
  }

  showSuccessAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Connected Succesfully ',
      showConfirmButton: false,
      timer: 1500
    });
  }



  showErrorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

}
