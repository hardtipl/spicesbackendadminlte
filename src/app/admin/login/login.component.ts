import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { Md5 } from 'ts-md5';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  loginform:any
  encryptedpass1: any;
  subscribedservices:Subscription[]=[];
  constructor(private router:Router,private fb:FormBuilder,private loginadmin:AdminService) { 
    this.loginform=this.fb.group({
      username:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    console.log("destroy has been called")
    this.subscribedservices.forEach((things:any)=>{
      console.log("servies are being destroyed")
      things.unsubscribe();
    })
        // this.subscription.unsubscribe()
    }
  loginuser() {
    const md5 = new Md5();
    md5.appendStr(this.loginform.value.password).end
    this.encryptedpass1 = md5.end();
    const val = {
      username: this.loginform.value.username,
      password: this.encryptedpass1,
    }
    
   const adminloginsub= this.loginadmin.sendlogindata(val).subscribe((data:any)=>{
      console.log(data)
      this.loginform.reset();
      localStorage.setItem("admintoken",data.Token)
      this.router.navigate(['/admin']);
    })
    this.subscribedservices.push(adminloginsub);
}
}
