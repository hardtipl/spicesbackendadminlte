import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url=environment.baseurl
  // http://localhost:4500/api
  // url="http://localhost:4500/api/admin/product";
  // http://localhost:4500/api

  constructor(public http:HttpClient) { }
  sendlogindata(data:any){
  // return this.http.post(`${this.url}/admin/customer/getall`,)
  }

  customredata(){
    return this.http.get(`${this.url}/admin/customer/getall`)
  }
  productbrnad(){
    return this.http.get(`${this.url}/admin/brand/getall`)
  }
  productlising(){
    return this.http.get(`${this.url}/admin/product/getall`)
  }
  header(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + localStorage.getItem("admintoken")

    };

    console.log(headerDict)
   return  {
      headers: new HttpHeaders(headerDict)
    };
  }
}
