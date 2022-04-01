import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { unsubscriptionofservices } from 'src/app/services/unsubscri.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {
productform:any
subs=new SubSink()
  uploadedingfile: any;
  avilableproducoptions: any;
  avilablebrads:any
  subscribedservices: Subscription[]=[];
  constructor(private fb:FormBuilder,private product:ProductService) { 
    this.productform=this.fb.group({
    productname:['', [Validators.required]],
    productshortdescription:['', [Validators.required]],
    productlongdescription:['', [Validators.required]],
    bestseller:['1', [Validators.required]],
    instock:['1', [Validators.required]],
    status:['Active', [Validators.required]],
    productimage:['', [Validators.required]],
    brandID:[''],
    fdiscountPrice:['',[Validators.required]],
    fprice:['',[Validators.required]],
    iproductOption_Id:['']
    });
  }
  get controlsofall(){
  return this.productform.controls;
}
ngOnDestroy() {
this.subs.unsubscribe();
  }
// get f() { return this.productform.controls; }
  ngOnInit(): void {
  this.subs.add(this.product.productoption().subscribe((data:any)=>{
      this.avilableproducoptions=data.Message
    }))
    this.subs.add(this.product.productbrnad().subscribe((data:any)=>{
      this.avilablebrads=data.Message
    }))
  
  }
  // sendbrnad(brand:any){
  //   console.log()
  //   console.log("changein the status",this.productform.value.status)
  //   this.productform.patchValue({
  //     brandID:brand.value
  //   })
  //   console.log("changein the status 2",this.productform.value.status)
  // }
  // productoption(prod_option:any){
  //   this.productform.patchValue({
  //     iproductOption_Id:prod_option.value
  //   })
  // }
  // productstatus(prod_status:any){
  //   this.productform.patchValue({
  //     status:prod_status.value
  //   })
  // }
  submit(){
    console.log("firstdata postinf directly",this.productform.value)
    // console.log(this.productform.value.producttitle)
    const sendingproduct={
      productname: this.productform.value.productname,
      productshortdescription: this.productform.value.productshortdesc,
      productlongdescription:this.productform.value.productlongdesc,
      bestseller:this.productform.value.bestseller,
      instock:this.productform.value.instock,
      status:this.productform.value.status,
      productimage:this.productform.value.productimage,
      iproductOption_Id:this.productform.value.iproductOption_Id,
      brandID:this.productform.value.brandID
    }
    const sendingdata=new FormData();
    // sendingdata.append('productimage',this.uploadedingfile,this.uploadedingfile.name)
    sendingdata.append('productname', this.productform.value.productname)
    sendingdata.append('productshortdescription', this.productform.value.productshortdescription)
    sendingdata.append('productlongdescription', this.productform.value.productlongdescription)
    sendingdata.append('bestseller', this.productform.value.bestseller)
    sendingdata.append('instock', this.productform.value.instock)
    sendingdata.append('status', this.productform.value.status)
    sendingdata.append('productimage', this.productform.value.productimage)
    sendingdata.append('iproductOption_Id', this.productform.value.iproductOption_Id)
    sendingdata.append('brandID', this.productform.value.brandID),
    sendingdata.append('fprice', this.productform.value.fprice),
    sendingdata.append('fdiscountPrice', this.productform.value.fdiscountPrice),
    sendingdata.append('brandID', this.productform.value.brandID)
    
    // console.log(sendingdata);
    // console.log("angular sending data",this.productform.value);
    this.product.addproduct(this.productform.value).subscribe((data: any) => {
      console.log(data);
      // alert("resp")

    })
    // const productdata
  }
  onSelectFile(data:any){
  this.uploadedingfile=data.target.files[0]
  }
}
