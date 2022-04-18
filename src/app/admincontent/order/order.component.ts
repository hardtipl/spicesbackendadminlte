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
  subs = new SubSink();
  displayedColumns: string[] = ['Order_Date', 'orderid', 'customer_name', 'efinalStatus', 'eshippingstatus', 'epaymentstatus', 'vbillingAddress', 'vshippingAddress', 'action'];
  filtergrid: any = [];
  orderupdatedata: any;
  @ViewChild('closebutton') closebutton: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  temp_order_pass: any;
  orderthingid: any;
  payment: any;
  orderm: any;
  shipment: any;
  constructor(private order: OrderService, private fb: FormBuilder, private _liveAnnouncer: LiveAnnouncer) {
    this.orderupdatedata = this.fb.group({
      orderstatus: ['', [Validators.required]],
      ordershipping: ['', [Validators.required]],
      orderpayment: ['', [Validators.required]],
      ordercomment: ['']
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
      console.log(data);
      this.filtergrid = data.Message[0];
      this.loaddataint();
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
    console.log("search text", data.value);
  
  }
  deletedialog(data: any) {
    alert(data);
  }
  passingid(data: any) {
    this.subs.add(this.order.paymentorderlog(data).subscribe((data1: any) => {
      this.payment = data1.Message;
      console.log("payment",this.payment)
    })
    )
    this.subs.add(this.order.shipmentorderlog(data).subscribe((data1: any) => {
      this.shipment = data1.Message;
    })
    )
    this.subs.add(this.order.orderlog(data).subscribe((data1: any) => {
      this.orderm = data1.Message;
    })
    )
    // console.log("change", this.filtergrid.filteredData);
    const resultun = this.filtergrid.filteredData.find((e: any) => {
      if (e.orderid == data) {
        console.log("aa", e);
        return e;
      }
    }
    )
    this.temp_order_pass = resultun;
    // console.log("hereih ", this.temp_order_pass);
    this.orderupdatedata.patchValue(
      {
        orderstatus: this.temp_order_pass.efinalStatus,
        ordershipping: this.temp_order_pass.eshippingstatus,
        orderpayment: this.temp_order_pass.epaymentstatus
      }
    );
    // this.filtergrid.filter((e:any))
    // this.persons =  this.personService.getPersons().filter(x => x.id == this.personId)[0];
    // this.persons =  this.personService.getPersons().find(x => x.id == this.personId);
    // const result = inventory.find( ({ name }) => name === 'cherries' );
    // console.log("change needed to be done",this.filtergrid.filteredData?.[data])
  }
  orderthing() {
    this.closebutton.nativeElement.click();
    this.orderthingid = this.temp_order_pass.orderid;
    console.log("update thunf", this.orderupdatedata.value);
    const send = {
      Orderstatus: this.orderupdatedata.value.orderstatus,
      PaymentStatus: this.orderupdatedata.value.orderpayment,
      ShippmentStatus: this.orderupdatedata.value.ordershipping,
      SendednByAdmin: 1,
      Comments: this.orderupdatedata.value.ordercomment
    }
    this.subs.add(this.order.customerorderudpate(this.orderthingid, send).subscribe((data: any) => {
      console.log(data);
      // data.success
      // this.filtergrid = data.Message[0]
      // this.filtergrid = data.Message;
      // this.loaddataint()
    })
    )
  }
  get controlsofall() {
    return this.orderupdatedata.controls;
  }

}
