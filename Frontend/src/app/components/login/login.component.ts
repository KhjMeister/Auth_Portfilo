
import { JarwisService } from './../../services/jarwis.service';

import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error =null;
  public form = {
    email:null,
    password:null
  };
  constructor(
    private datas:JarwisService,
    private Token:TokenService,
    private router:Router,
    private auth:AuthService,
    private notify:SnotifyService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.notify.info('Wait...',{timeout:1000});
    this.datas.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('profile');
    this.notify.success('Welcome',{timeout:2000});
  }

  handleError(error:any){
    this.error = error.error.error;
    this.notify.error('Somthing Wrong !',{timeout:2000});
    
  }
}
