import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject <boolean>(this.Token.loggedIn());

  //設定loggedIn一但被改變就發送廣播
  authStatus = this.loggedIn.asObservable();

  //改變loggedIn
  changeAuthStatus(value: boolean){

    this.loggedIn.next(value);

  }

  constructor(private Token: TokenService) { }



}
