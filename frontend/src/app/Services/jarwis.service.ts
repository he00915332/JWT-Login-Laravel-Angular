import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  constructor(private http: HttpClient) {}
  private baseUrl = 'http://127.0.0.1:8000/api';

  // tslint:disable-next-line: typedef
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data );
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data );
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data );
  }

  changePassword(data){
    return this.http.post(`${this.baseUrl}/resetPassword`, data );
  }

}

