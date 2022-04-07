import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.css']
})
export class DeletedialogComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  @Output() deleteconfimation: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  okay(){
    this.closebutton.nativeElement.click();
    this.deleteconfimation.emit(true)
    return true
  }
  no(){
    this.closebutton.nativeElement.click();
    this.deleteconfimation.emit(false)
    console.log("false")
    return false
  }
}
