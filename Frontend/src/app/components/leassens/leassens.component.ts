import { Component,ViewEncapsulation, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-leassens',
  templateUrl: './leassens.component.html',
  styleUrls: ['./leassens.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeassensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public headerText = [{ 
    text: "انگلیسی"
  },{ 
    text: "ریاضی"
  },{ 
    text: "ساختمان داده"
  }];
}
