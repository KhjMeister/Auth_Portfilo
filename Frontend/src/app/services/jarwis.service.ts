import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseURL ="http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }

  login(data:any){
   return this.http.post( `${this.baseURL}/login`,data);
  }
  signup(data:any){
    return this.http.post( `${this.baseURL}/signup`,data);
  }

  sendPasswordResetLink(data:any){
    return this.http.post(`${this.baseURL}/sendPasswordResetLink`,data);
  }
  changePassword(data:any){
 
    return this.http.post(`${this.baseURL}/resetPassword`,data);
    
  }
}
