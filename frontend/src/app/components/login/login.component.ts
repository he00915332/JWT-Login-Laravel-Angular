import { AuthService } from './../../Services/auth.service';
import { TokenService } from './../../Services/token.service';
import { JarwisService } from './../../Services/jarwis.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null,
  };

  public error = null;

  constructor(
    private Jarwise: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
    ) { }


  // tslint:disable-next-line: typedef
  onSubmit() {
    this.Jarwise.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    //console.log('data='+data.access_token);
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  // tslint:disable-next-line: typedef
  handleError(error){
    this.error = error.error.error;
  }


  ngOnInit(): void {
  }

}
