import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productform:any
  constructor(private fb:FormBuilder) { 
    this.productform=this.fb.group({
    producttitle:['', [Validators.required]],
    productshortdesc:['', [Validators.required]],
    productlongdesc:['', [Validators.required]],
    bestseller:['', [Validators.required]],
    instock:['', [Validators.required]],
    status:['', [Validators.required]],
    productimage:['', [Validators.required]],

    });
  }
  get controlsofall(){
    console.log("retubnrinfg ghr t")
  return this.productform.controls;
}
// get f() { return this.productform.controls; }
  ngOnInit(): void {
  }
  submit(){
    console.log(this.productform.value)
  }

}
