import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit ,OnDestroy{
  stockform: any
  productlisting: any
  avilableproducoptions: any
  subs = new SubSink()
  constructor(private fb: FormBuilder, private products: ProductService) {
    this.subs.add(this.products.productlising().subscribe((data: any) => {
      this.productlisting = data.Message
    }))
    this.subs.add(this.products.productoption().subscribe((data: any) => {
      this.avilableproducoptions = data.Message
    }))
  }

  ngOnInit(): void {
  }
  submit() {

  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
