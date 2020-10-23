import { AuthService } from './../../Services/auth.service';
import { TokenService } from './../../Services/token.service';
import { JarwisService } from './../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };


  public form = {

    email: null,
    name: null,
    password: null,
    password_confirmation: null

  };

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
    ) { }

  // tslint:disable-next-line: typedef
  onSubmit(){
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);

    this.router.navigateByUrl('/profile');

  }

  // tslint:disable-next-line: typedef
  handleError(error){
    this.error = error.error.errors;

  }

  ngOnInit(): void {
  }

}
