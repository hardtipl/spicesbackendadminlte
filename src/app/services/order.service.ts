import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = environment.baseurl
  // url="http://localhost:4500/api/admin/product";
  // http://localhost:4500/api/
  // /admin/login/customerorder/orderlog?orderid=1

  constructor(public http: HttpClient) { }
  customerorderlisting() {
    return this.http.get(`${this.url}/admin/customerorder`)
  }
  paymentorderlog(orderid:number){
    return this.http.get(`${this.url}/admin/login/customerorder/paymentlog?orderid=${orderid}`)
  }
  shipmentorderlog(orderid:number){
    return this.http.get(`${this.url}/admin/login/customerorder/shippinglog?orderid=${orderid}`)
  }
  orderlog(orderid:number){
    return this.http.get(`${this.url}/admin/login/customerorder/orderlog?orderid=${orderid}`)
  }
  customerorderudpate(orderid: any, data: any) {
    console.log("update orderid in order service", orderid)
    console.log("update object in order service", data)
    return this.http.put(`${this.url}/admin/customerorder/updatestatuses/${orderid}`, data)
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
