import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    this.stockform=this.fb.group({
      producid:['', [Validators.required]],
      iproductOption_Id:['', [Validators.required]],
      status:['', [Validators.required]],
      qty:['1', [Validators.required]],
    })
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
    console.log(this.stockform.value)
    const sendstock={
     iproduct_id:this.stockform.value.producid,
     i_product_option_id:this.stockform.value.iproductOption_Id,
     iqty:this.stockform.value.qty,
     adminid:1,
     status:this.stockform.value.status
    }
    this.products.sendingstock(sendstock).subscribe((data:any)=>{
      alert("data inserted")
    })


  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
