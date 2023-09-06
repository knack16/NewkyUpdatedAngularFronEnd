import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7218'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  register(registrationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registrationData);
  }
}
