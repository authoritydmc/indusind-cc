import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

   fulldata="";
   isDataSet=new BehaviorSubject<boolean>(false);
   dataSet$=this.isDataSet.asObservable();
  constructor(private service:DataServiceService) { 
   this.setData();
  
}
setData(){
  console.log("setting data");
  this.service.getDBurl().subscribe(r=>{
    this.fulldata=JSON.stringify(r);
  
   this.isDataSet.next(true);
  })  ;
}
  isItServiceable(pincode:string){
    // here check in JSON and find details
  
    return JSON.parse(this.fulldata);

  }
  getStateList(state:string)
  {

    // find state based on pincode 

  }

  getNeighbourList(city:string)
  {

  }

  getFullData(){
 

return  this.fulldata;

  }

  findState(pincode:string):Observable<JSON[]>{

   return this.service.getState(pincode);

  }
}
