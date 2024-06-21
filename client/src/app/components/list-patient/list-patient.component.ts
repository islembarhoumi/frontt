import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patients: any;
  constructor(private patientService: PatientService) { }
  ngOnInit(): void {
    this.getPatient();
  }
  

  getPatient(): void {
    this.patientService.getAllPatient().subscribe((patient) => {
      this.patients = patient.map((Patient: any) => {
        return { ...Patient, likes: 0 };
      });
    });
  }
  incrementLikes(Patient: any): void {
    Patient.likes++;
  }
  decrementLikes(Patient: any): void {
    if (Patient.likes > 0) {
      Patient.likes--;
    }
  }
  toggleLike(Patient: any): void {
    if (Patient.likes > 0) {
      this.decrementLikes(Patient);
    } else {
      this.incrementLikes(Patient);
    }
  }
}
