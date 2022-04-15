import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/services/customer.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  subs = new SubSink()
  displayedColumns: string[] = ['vfullName', 'vemail', 'vuserName', 'vwhatsappNo','vaddress'];
  filtergrid: any = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private Customer:CustomerService ,private _liveAnnouncer: LiveAnnouncer) { }
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
    this.subs.add(this.Customer.customredata().subscribe((data: any) => {
      this.filtergrid = data.Message
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
  // customredata
}
