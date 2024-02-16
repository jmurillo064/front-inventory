import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8084";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(body: any) {
    console.log(body);
    const endpoint = `${base_url}/auth/login`;
    return this.http.post(endpoint, body);
  }

  get isLoggenIn(): boolean {
    const token = localStorage.getItem('token');
    console.log(token);
    return token !== null;
  }

  get userToken(): String {
    return localStorage.getItem('token') ?? '';
  }

}
