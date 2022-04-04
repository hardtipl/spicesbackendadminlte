import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brandform:any
  constructor(private fb:FormBuilder,private brand:ProductService) {
      this.brandform=this.fb.group({
      brandname:['',[Validators.required]],
      vstatus:['Active',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  get controlsofall(){
    return this.brandform.controls;
  }
  submit(){
    const sendbranddata={
     vbrandName:this.brandform.value.brandname,
     estatus:this.brandform.value.vstatus
    }
    this.brand.postbranddata(sendbranddata).subscribe((data:any)=>alert("Brand Added"))
  }
}
