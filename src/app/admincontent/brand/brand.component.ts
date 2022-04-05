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
  brandform:any;
  filtergrid: any=[];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['vbrandName'];
  constructor(private fb:FormBuilder,private brand:ProductService,private _liveAnnouncer: LiveAnnouncer ) {
      this.brandform=this.fb.group({
      brandname:['',[Validators.required]],
      vstatus:['Active',[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.brand.getallbrand().subscribe((data:any)=>{
      
    // console.log("data",data);
    this.filtergrid=data.Message
  
    console.log( this.filtergrid);
    this.loaddataint()
  })
  }
  get controlsofall(){
    return this.brandform.controls;
  }
  loaddataint(){
    this.filtergrid = new MatTableDataSource<any>(this.filtergrid);
    this.filtergrid.sort = this.sort;
    this.filtergrid.paginator = this.paginator;
    console.log("data loaded ",this.filtergrid);
  }
  submit(){
    const sendbranddata={
     vbrandName:this.brandform.value.brandname,
     estatus:this.brandform.value.vstatus
    }
    this.brand.postbranddata(sendbranddata).subscribe((data:any)=>alert("Brand Added"))
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
}
