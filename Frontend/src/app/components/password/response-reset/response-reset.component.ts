import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  public error = {
    email:null,
    password:null
  };
   
  public form = {
    email:null,
    password:null,
    password_confirmation:null,
    resetToken:null
  };
  constructor(
    private route:ActivatedRoute,
    private jarvis:JarwisService,
    private router:Router,
    private notify:SnotifyService
    ) {
    route.queryParams.subscribe(params =>{
      this.form.resetToken = params['token'];
    });
   }

  ngOnInit( ): void {}
  

  onSubmit(){
    this.jarvis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error =>this.handleError(error)
    );
  }

  handleResponse(data:any){
    let _router = this.router;
    this.notify.confirm('Done! Click To go login',{
    buttons: [
      {
        text: 'Ok', 
        action: toster => {
          _router.navigateByUrl('login'),
          this.notify.remove(toster.id)
        }
      }     
    ]
  });
  
  }

  handleError(error:any){
    this.error = error.error.errors;
    
    
    
  }
}
