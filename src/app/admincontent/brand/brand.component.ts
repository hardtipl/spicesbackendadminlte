import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  brandform: any;
  brandid:any
  filtergrid: any = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['vbrandName', 'id'];
  constructor(private fb: FormBuilder, private brand: ProductService, private _liveAnnouncer: LiveAnnouncer) {
    this.brandform = this.fb.group({
      brandname: ['', [Validators.required]],
      vstatus: ['Active', [Validators.required]],
      id: ['']
    })
  }

  ngOnInit(): void {
    this.loadbrand()
  }
  get controlsofall() {
    return this.brandform.controls;
  }
  loadbrand() {
    this.brand.getallbrand().subscribe((data: any) => {
      this.filtergrid = data.Message
      console.log(this.filtergrid);
      this.loaddataint()
    })
  }
  loaddataint() {
    this.filtergrid = new MatTableDataSource<any>(this.filtergrid);
    this.filtergrid.sort = this.sort;
    this.filtergrid.paginator = this.paginator;
  }
  submit() {
    const sendbranddata = {
      vbrandName: this.brandform.value.brandname,
      estatus: this.brandform.value.vstatus
    }
    this.brandform.reset()
    this.brand.postbranddata(sendbranddata).subscribe((data: any) => {
      // alert("Brand Added")
      this.loadbrand()
  })
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  deleteoption(id: any) {
    this.brand.singlebrand(id).subscribe((data: any) => {
      console.log(data)
      this.brandform.patchValue({
        brandname: data.Message[0].vbrandName,
        vstatus: data.Message[0].estatus,
        id: data.Message[0].id
      })

    })
    // alert(id)
  }
  deleteid(id:any){
    this.brandid=id
  }
  confirmcall(data: any) {
    // alert(data) //here is the result true or false
    if(data === true){
      this.brand.deletebrand(this.brandform.value).subscribe((data: any) => {
        console.log(data)
        this.loadbrand()
      })
    }else{
      console.log("returned false from update")
    }
  }
  submitupdate() {
    this.closebutton.nativeElement.click();   
  }
  deleteconfirmcall(data:any){
    // alert(data)
    if(data === true){
      this.brand.deletebrand(this.brandid).subscribe((data: any) => {
        console.log(data)
        this.loadbrand()
      })
    }else{
      console.log("returned false from update")
    }
  }
}
