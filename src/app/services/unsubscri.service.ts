import { Subject, Subscription } from "rxjs";

export class unsubscriptionofservices{
  // private subcribesservices=[];
  subcribesservices=new Subject();
  add(service:Subscription){
    this.subcribesservices.push(service);
  }
  dispose(){
    this.subcribesservices.forEach((things:any)=>{
      things.unsubscribe();
    })
  }
}