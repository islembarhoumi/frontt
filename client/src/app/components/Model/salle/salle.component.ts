import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  medecins: any;
  constructor(private salleService: SalleService) { }


  ngOnInit(): void {
    this.getSalles();
  }
  getSalles(): void {
    this.salleService.getAllSalle().subscribe((salle) => {
      this.medecins = salle.map((medecin: any) => {
        return { ...medecin, likes: 0 };
      });
   
    });
  }

 
}