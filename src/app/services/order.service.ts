import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = environment.baseurl
  // http://localhost:4500/api
  // url="http://localhost:4500/api/admin/product";
  // http://localhost:4500/api

  constructor(public http: HttpClient) { }
  customerorderlisting() {
    return this.http.get(`${this.url}/admin/customerorder`)
  }
  header() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + localStorage.getItem("admintoken")
    };
    console.log(headerDict)
    return {
      headers: new HttpHeaders(headerDict)
    };
  }
}
