import { SnotifyModule, SnotifyService } from 'ng-snotify';
import { JarwisService } from './../../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };
  constructor(
    private jarvis: JarwisService,
    private notify: SnotifyService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res){
    this.form.email = null;
  }

}
