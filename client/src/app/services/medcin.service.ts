import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MedecinService {
  private apiUrl = 'http://localhost:8080/api/medcin/list'; // Remplacez par l'URL de votre backend
  constructor(private http: HttpClient) {}
  getAllMedcin(): Observable<Medcin[]> {
    return this.http.get<Medcin[]>(this.apiUrl);
  }



  
}
   interface Medcin {
    id: number;
    nom: string;
    prenom: string;
  }