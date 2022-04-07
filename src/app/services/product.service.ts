import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
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
  return this.http.post(`${this.url}/admin/product`,data).pipe(catchError(this.handleError))
  }

  productoption(){
    return this.http.get(`${this.url}/admin/producoptions`).pipe(catchError(this.handleError))
  }
  productbrnad(){
    return this.http.get(`${this.url}/admin/brand/getall`).pipe(catchError(this.handleError))
  }
  sendingstock(data:any){
    return this.http.post(`${this.url}/admin/stock/addstock`,data).pipe(catchError(this.handleError))
  }
  productlising(){
    return this.http.get(`${this.url}/admin/product/getall`).pipe(catchError(this.handleError))
  }
  postbrand(da:any){
    return this.http.post(`${this.url}/admin/product/getall`,da).pipe(catchError(this.handleError))
  }
  postbranddata(data:any){
    return this.http.post(`${this.url}/admin/brand`,data)
  }
  getallbrand(){
    return this.http.get(`${this.url}/admin/brand/getall`).pipe(catchError(this.handleError))
  }
  singlebrand(id:number|null){
    return this.http.get(`${this.url}/admin/brand/${id}`).pipe(catchError(this.handleError))
  }
  updatebrand(data: any) {
    const dataupdate = {
      vbrandName: data.brandname,
      estatus: data.vstatus
    }
    const thisurl = this.http.put(`${this.url}/admin/brand/updatebrand/${data.id}`, dataupdate).pipe(catchError(this.handleError))
    return thisurl
  }
  deletebrand(id:any){
    return this.http.delete(`${this.url}/admin/brand/${id}`).pipe(catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status != null ) {
      alert("some error occured")
    return  throwError(
        error.error);
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      // alert("fronterror");
    }
    //  else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong.
    //   console.error(
    //     `Backend returned code ${error.status}, body was: `, error.error);
    //     alert("backend error");
    // }
    // Return an observable with a user-facing error message.
    return throwError(
      'some error occured');
  }
}
