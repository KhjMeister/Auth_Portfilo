import { Component, ViewEncapsulation, Inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { WorksService } from '../services/works.service';
import { Works } from '../works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorksComponent implements OnInit {

  allWoorks:any;
  CWoorks:any;
  LWoorks:any;
  works = new Works();

  constructor(
    private route:Router,
    private notify:SnotifyService,
    private work:WorksService
  ) { }

  ngOnInit(): void {
    this.getAlldata();
    this.getCdata();
    this.getLdata();
  }

  public headerText = [{ 
      text: "تمام فعالیت ها"
    },{ 
      text: "کامل شده ها"
    },{ 
      text: "ناقص" 
    },{ 
      text: "فعالیت جدید"
    }];

  getAlldata(){
    this.work.getAllWorks().subscribe(
      data => this.handleResponse(data)
    );
  }
  getCdata(){
    this.work.getCWorks().subscribe(
      data => this.handleCResponse(data)
    );
  }
  getLdata(){
    this.work.getLWorks().subscribe(
      data => this.handleLResponse(data)
    );
  }

  handleResponse(data:any){
    this.allWoorks = data;
  }
  handleCResponse(data:any){
    this.CWoorks = data;
  }
  handleLResponse(data:any){
    this.LWoorks = data;
  }
}
