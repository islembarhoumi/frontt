import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/services/medcin.service';

@Component({
  selector: 'app-list-medcin',
  templateUrl: './list-medcin.component.html',
  styleUrls: ['./list-medcin.component.css']
})
export class ListMedcinComponent implements OnInit {

  medecins: any;
  constructor(private medecinService: MedecinService) { }
  ngOnInit(): void {
    this.getMedecins();
  }
  getMedecins(): void {
    this.medecinService.getAllMedcin().subscribe((Medecin) => {
      this.medecins = Medecin.map((medecin: any) => {
        return { ...medecin, likes: 0 };
      });
   
    });
  }
  incrementLikes(medecin: any): void {
    medecin.likes++;
  }
  decrementLikes(medecin: any): void {
    if (medecin.likes > 0) {
      medecin.likes--;
    }
  }
  toggleLike(medecin: any): void {
    if (medecin.likes > 0) {
      this.decrementLikes(medecin);
    } else {
      this.incrementLikes(medecin);
    }
  }
}