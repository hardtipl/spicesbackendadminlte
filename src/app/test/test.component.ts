import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,AfterViewInit {

  @ViewChild('datatable') table:any
  public apidata:any
  datavalues:any
    constructor(private http:HttpClient) { 
    //   this.http.get('https://gorest.co.in/public/v2/users').subscribe((data:any)=>{this.apidata=data
    // console.log(data)})
    }
    // dtOptions: DataTables.Settings = {};
    ngOnInit() {
    //   console.log("view int executed")
    // this.dtOptions = {
    //     pagingType: 'full_numbers',
    //     pageLength: 5,
    //   lengthMenu : [5, 10, 25],
    //     processing: true
    //   };
  }
  ngAfterViewInit(): void {
    console.log("view afterint executed")
    // alert("ng after view init is  called")
      // this.datavalues=$(this.table.nativeElement)
      // this.datavalues.DataTables()
  }
}
