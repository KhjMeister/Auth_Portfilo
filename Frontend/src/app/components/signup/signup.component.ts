import { JarwisService } from './../../services/jarwis.service';

import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error ={
    name:null,
    email:null,
    password:null,
  };
  public form = {
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };

  constructor(
    private datas:JarwisService,
    private Token:TokenService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.datas.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data:any){
    this.Token.handle(data.access_token);
    
    this.router.navigateByUrl('profile');
  }
  handleError(error:any){
    this.error = error.error.errors;
    
  }
}
