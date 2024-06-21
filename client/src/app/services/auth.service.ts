import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
;

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = 'http://localhost:8080/api/inscription'; // Remplacez par votre URL backend
    private readonly sessionIdKey = 'sessionId';
    private userRoleSubject = new BehaviorSubject<string | null>(localStorage.getItem('userRole'));
  userRole$ = this.userRoleSubject.asObservable();
  private authenticatedUserSubject = new BehaviorSubject<any>(null);
  authenticatedUser$ = this.authenticatedUserSubject.asObservable();
    constructor(private http: HttpClient) {}
  
    inscrireUtilisateur(inscription: any): Observable<any> {
      return this.http.post(`${this.baseUrl}`, inscription);
}


authenticate(connexionDTO: Connexion): Observable<any> {
  const loginUrl = `${this.baseUrl}/login`;
  return this.http.post(loginUrl, connexionDTO).pipe(
    tap((response: any) => {
      if (response.success === 'true') {
        const userRole = response.role;
        this.userRoleSubject.next(userRole);
        localStorage.setItem('userRole', userRole);
        this.authenticatedUserSubject.next(response); // Stocker les détails de l'utilisateur authentifié
        localStorage.setItem('authenticatedUser', JSON.stringify(response)); // Stocker les détails de l'utilisateur authentifié

      }
    })
  );
}


getAuthenticatedUserDetails(): any {
  const userDetailsString = localStorage.getItem('authenticatedUser');
  if (userDetailsString) {
    return JSON.parse(userDetailsString);
  }
  return null;
}


connecterUtilisateur(Connexion: Connexion): Observable<any> {
  const loginUrl = `${this.baseUrl}/login`;
  return this.http.post(loginUrl, Connexion)
    .pipe(
      // Gérer la réponse et émettre le rôle si la connexion réussit
      tap((response: any) => {
        if (response.success === 'true') {
          const userRole = response.role;
          this.userRoleSubject.next(userRole);
            // Mettre à jour le sujet BehaviorSubject avec le rôle de l'utilisateur
            this.userRoleSubject.next(userRole);
            localStorage.setItem('userRole', userRole);
            // Stockez l'ID de session dans le localStorage
        }
      })
    );
}
logout(): void {
  // Supprimer les informations de session du localStorage
  localStorage.removeItem('userRole');
  // Mettre à jour le BehaviorSubject et le userRole$ observable
  this.userRoleSubject.next(null);
}
getSessionRole(): string | null {
  return localStorage.getItem('userRole');
}
isLoggedIn(): boolean {
  return !!this.getSessionId(); // Vérifie si l'ID de session est présent
}
getSessionId(): string | null {
  return localStorage.getItem(this.sessionIdKey);



}
 
}
 
interface Connexion {
  email: string;
  password: string;

}






