import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productform:any
  uploadedingfile: any;
  constructor(private fb:FormBuilder,private product:ProductService) { 
    this.productform=this.fb.group({
    productname:['', [Validators.required]],
    productshortdescription:['', [Validators.required]],
    productlongdescription:['', [Validators.required]],
    bestseller:['', [Validators.required]],
    instock:['', [Validators.required]],
    status:['', [Validators.required]],
    productimage:['', [Validators.required]],

    });
  }
  get controlsofall(){
  return this.productform.controls;
}
// get f() { return this.productform.controls; }
  ngOnInit(): void {
  }
  submit(){
    console.log(this.productform.value)
    // console.log(this.productform.value.producttitle)
    const sendingproduct={
      productname: this.productform.value.productname,
      productshortdescription: this.productform.value.productshortdesc,
      productlongdescription:this.productform.value.productlongdesc,
      bestseller:this.productform.value.bestseller,
      instock:this.productform.value.instock,
      status:this.productform.value.status,
      productimage:this.productform.value.productimage
    }
    const sendingdata=new FormData();
    // sendingdata.append('productimage',this.uploadedingfile,this.uploadedingfile.name)
    sendingdata.append('productname', this.productform.value.productname)
    sendingdata.append('productshortdescription', this.productform.value.productshortdescription)
    sendingdata.append('productlongdescription', this.productform.value.productlongdescription)
    sendingdata.append('bestseller', this.productform.value.bestseller)
    sendingdata.append('instock', this.productform.value.instock)
    sendingdata.append('status', this.productform.value.status)
    // console.log(sendingdata);
    this.product.addproduct(this.productform.value).subscribe((data:any)=>{
    console.log(data);
    alert("resp")
    
  })
    // const productdata
  }
  onSelectFile(data:any){
  this.uploadedingfile=data.target.files[0]
  }
}
