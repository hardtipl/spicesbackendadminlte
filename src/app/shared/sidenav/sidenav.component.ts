import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {

 
  title = 'admin-panel-layout';
  // sideBarOpen = "opened";
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    alert("clicked")
//     if( this.sideBarOpen != ""){
// console.log("hiding")
//       this.sideBarOpen = "";
//     }
//     else{
//       console.log("showing")
//       this.sideBarOpen = "opened";
//     }
  }

}
