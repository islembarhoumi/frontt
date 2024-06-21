import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private baseUrl = 'http://localhost:8080/api/rendezvous';
  constructor(private http: HttpClient) {}
  saveRendezVous(rendezvous: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, rendezvous);
  }
  getAllRendezVous(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  updateRendezVouss(rendezvous: any): Observable<any> {
    const id = rendezvous.id; // Assurez-vous que votre objet rendezvous contient une propriété "id"
    return this.http.put<any>(`${this.baseUrl}/${id}`, rendezvous);
  }


  updateRendezVous(id: number, updatedMedecin: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedMedecin);
  }
}