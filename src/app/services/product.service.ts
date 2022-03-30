import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="http://localhost:4500/api/admin/product";
  // localhost:4500/api/admin/product

  constructor(public http:HttpClient) { }
  addproduct(data:any){
    console.log(data)
  //  console.log(this.http.post(`${this.url}`,data))
  return this.http.post(`${this.url}`,data)
  }
  saveStarUser(StarData:any) {
    console.log(StarData);
    return this.http.post(`${this.url}/Star`,StarData)
    
  }
  productoption(){
    return this.http.get(`http://localhost:4500/api/admin/producoptions`)
  }
  productbrnad(){
    return this.http.get(`http://localhost:4500/api/admin/brand/getall`)
  }
}
