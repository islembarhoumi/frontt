import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private apiUrl = 'http://localhost:8080/salle'; // Remplacez par l'URL de votre backend


  constructor(private http: HttpClient) {}
  getAllSalle(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl);
  }
}
   interface Salle {
   
  }