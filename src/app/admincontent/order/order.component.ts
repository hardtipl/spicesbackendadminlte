import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/services/order.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  subs = new SubSink()
  displayedColumns: string[] = ['Order_Date', 'orderid', 'customer_name', 'efinalStatus', 'eshippingstatus', 'epaymentstatus', 'vbillingAddress', 'vshippingAddress', 'action'];
  filtergrid: any = [];
  orderupdatedata: any
  @ViewChild('closebutton') closebutton: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private order: OrderService, private fb: FormBuilder, private _liveAnnouncer: LiveAnnouncer) {
    this.orderupdatedata = this.fb.group({
      orderstatus: ['', [Validators.required]],
      ordershipping: ['', [Validators.required]],
      orderpayment: ['', [Validators.required]]
    });
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngOnInit(): void {
    this.loaddatavarialbe()
  }
  loaddatavarialbe() {
    this.subs.add(this.order.customerorderlisting().subscribe((data: any) => {
      this.filtergrid = data.Message[0]
      this.loaddataint()
    })
    )
  }
  loaddataint() {
    console.log(this.filtergrid);
    this.filtergrid = new MatTableDataSource<any>(this.filtergrid);
    this.filtergrid.sort = this.sort;
    this.filtergrid.paginator = this.paginator;
  }
  searchin(data: any) {
    console.log("search text", data)
  }
  deletedialog(data: any) {
    alert(data)
  }
  passingid(data: any) {
    // alert(data)
      
  }
  submit() {
    this.closebutton.nativeElement.click();
  }
  get controlsofall() {
    return this.orderupdatedata.controls;
  }
}
