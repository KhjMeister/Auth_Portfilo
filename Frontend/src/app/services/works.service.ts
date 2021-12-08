import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private baseURL ="http://127.0.0.1:8000/api";
  constructor(
    private http:HttpClient
  ) { }

  getAllWorks(){
    return this.http.get(this.baseURL+'/getAllWorks');
  }
  getCWorks(){
    return this.http.get(this.baseURL+'/getCWorks');
  }
  getLWorks(){
    return this.http.get(this.baseURL+'/getLWorks');
  }
}
