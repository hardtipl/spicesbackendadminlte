import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { SubSink } from 'subsink';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, OnDestroy {
  stockform: any
  productlisting: any
  avilableproducoptions: any
  subs = new SubSink()
  displayedColumns: string[] = ['vproductName', 'vbrandName', 'vname', 'availablestockincompany'];
  filtergrid: any = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private fb: FormBuilder, private products: ProductService, private _liveAnnouncer: LiveAnnouncer) {
    console.log("stock is called")
    this.stockform = this.fb.group({
      producid: ['', [Validators.required]],
      iproductOption_Id: ['', [Validators.required]],
      status: ['', [Validators.required]],
      qty: ['1', [Validators.required]],
    })
    this.subs.add(this.products.productlising().subscribe((data: any) => {
      this.productlisting = data.Message
    }))
    this.subs.add(this.products.productoption().subscribe((data: any) => {
      this.avilableproducoptions = data.Message
    }))
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
  ngOnInit(): void {
  this.loaddatavarialbe()
  }
  loaddatavarialbe(){
    this.subs.add(this.products.getstock().subscribe((data: any) => {
      this.filtergrid = data.data
      this.loaddataint()
    })
    )
  }
  submit() {
    const sendstock = {
      iproduct_id: this.stockform.value.producid,
      i_product_option_id: this.stockform.value.iproductOption_Id,
      iqty: this.stockform.value.qty,
      adminid: 1,
      status: this.stockform.value.status
    }
    this.products.sendingstock(sendstock).subscribe((data: any) => {
      console.log(data)
      this.loaddatavarialbe()
    })
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  loaddataint() {
    console.log(this.filtergrid);
    this.filtergrid = new MatTableDataSource<any>(this.filtergrid);
    this.filtergrid.sort = this.sort;
    this.filtergrid.paginator = this.paginator;
  }
}
