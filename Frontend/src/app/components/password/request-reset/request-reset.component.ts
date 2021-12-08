import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { JarwisService } from 'src/app/services/jarwis.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
 
  public form = {
    email:null
  };
  constructor(
    private jarwis:JarwisService,
    private notify:SnotifyService

    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.notify.info('Wait...',{timeout:5000});
    this.jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(res:any){
    this.notify.success(res.data,{
      buttons: [
        {
          text: 'Ok', 
          action: toster => {
            this.notify.remove(toster.id)
          }
        }     
      ]
    });
    this.form.email = null;
  }

  handleError(error:any){
    this.notify.error(error.error.error,{
      buttons: [
        {
          text: 'Ok', 
          action: toster => {
            this.notify.remove(toster.id)
          }
        }     
      ]
    });
    this.form.email = null;
  }
}
