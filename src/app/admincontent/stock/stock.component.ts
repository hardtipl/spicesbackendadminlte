import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stockform:any
  productlisting:any
  avilableproducoptions:any
  constructor(private fb:FormBuilder,private products:ProductService) {
this.products.productlising().subscribe((data:any)=>{
  this.productlisting=data.Message
})
this.products.productoption().subscribe((data:any)=>{
  this.avilableproducoptions=data.Message
})
   }

  ngOnInit(): void {
  }
  submit(){

  }
}
