import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SecretaireService {
  private baseUrl = 'http://localhost:8080/api/secretaires/list';
  constructor(private http: HttpClient) {}
  saveRendezVous(rendezvous: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, rendezvous);
  }
  getAllsecretaires(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  updateRendezVous(rendezvous: any): Observable<any> {
    const id = rendezvous.id; // Assurez-vous que votre objet rendezvous contient une propriété "id"
    return this.http.put<any>(`${this.baseUrl}/${id}`, rendezvous);
  }










 
}