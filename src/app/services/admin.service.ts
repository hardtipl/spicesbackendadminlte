import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url=environment.baseurl
  // http://localhost:4500/api
  // url="http://localhost:4500/api/admin/product";
  // http://localhost:4500/api

  constructor(public http:HttpClient) { }
  sendlogindata(data:any){
  return this.http.post(`${this.url}/admin/login`,data)
  }

  productoption(){
    return this.http.get(`${this.url}/admin/producoptions`)
  }
  productbrnad(){
    return this.http.get(`${this.url}/admin/brand/getall`)
  }
  productlising(){
    return this.http.get(`${this.url}/admin/product/getall`)
  }
}
