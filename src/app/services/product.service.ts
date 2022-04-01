import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url=environment.baseurl
  // http://localhost:4500/api
  // url="http://localhost:4500/api/admin/product";
  // localhost:4500/api/admin/product

  constructor(public http:HttpClient) { }
  addproduct(data:any){
    console.log(data)
  //  console.log(this.http.post(`${this.url}`,data))
  return this.http.post(`${this.url}/admin/product`,data)
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
