import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint: string = environment.api_url;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return <string>localStorage.getItem('token');
  }

  getUser (token: string): Observable<any> {
    localStorage.setItem('token', token);

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });

    return this.http.get(`${this.endpoint}/user`, {headers});
  }

  logIn(login: string, password: string): Observable<User> {
    const url: string = `${this.endpoint}/login`;

    return this.http.post<User>(url, {login, password});
  }

  signUp(login: string, password: string): Observable<User> {
    const url: string = `${this.endpoint}/auth`;

    return this.http.post<User>(url, {login, password});
  }
}
