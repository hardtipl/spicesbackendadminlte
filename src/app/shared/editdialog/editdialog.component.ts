import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  // @InputEvent('sendname') sendname
  @Output() confiramtioncame: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  okay(){
    this.closebutton.nativeElement.click();
    this.confiramtioncame.emit(true)
    return true
  }
  no(){
    this.closebutton.nativeElement.click();
    this.confiramtioncame.emit(false)
    console.log("false")
    return false
  }
}
