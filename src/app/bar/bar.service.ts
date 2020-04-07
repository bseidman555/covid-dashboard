import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http: HttpClient) { }

  getConfirmed(){
   return this.http.get("https://corona-api.com/countries")
   

  }
}
