import { Component, OnInit } from '@angular/core';

import { DataServiceService } from './data-service.service';
import { UtilsService } from './utils.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'indusind-cc';
  PINCODE:string='';
  Servicibiity:string='not Servicable';
  addOnData:any={};
  FullData:any[]=[];
  toogleInput:boolean=false;
  checkCalled:boolean=false;
  isServicable:boolean=false;
  isInvalidPin:boolean=false;

 constructor(private service:UtilsService){

 }
  ngOnInit(){
 


   
  }

  check(){
    this.addOnData.city_av_list=[];
    this.addOnData.state_av_list=new Set();
   
    if(this.PINCODE.length==6)
    { console.log("Checking "+this.PINCODE);
      this.FullData=this.service.isItServiceable(this.PINCODE);
      this.checkCalled=true;
      this.Servicibiity="not servicable ";
      this.isServicable=false;
      for(let data of this.FullData)
      {
        if(data["PIN CODE"]==this.PINCODE)
        {
          this.Servicibiity="servicable";
           this.isServicable=true;
          this.addOnData=data;
          this.isInvalidPin=false;
          
          break;
        }
      }
      if(this.isServicable)
      {
        // add all available pincode of city list
        this.addOnData.city_av_list=[];
        for(let data of this.FullData)
        {
          if(data["CITY"]==this.addOnData.CITY)
          {
           this.addOnData.city_av_list.push(data["PIN CODE"]);
          }
        }
      

      this.addOnData.state_av_list=new Set();

      for(let data of this.FullData)
      {
        if(data["AREA"]==this.addOnData.AREA)
        {
         this.addOnData.state_av_list.add(data["CITY"]);
        }
      }

      }
      else
      {
        // not servicable ,,try to find state based data
        this.service.findState(this.PINCODE).subscribe(
          data=>{
          let obj:any=JSON.parse(JSON.stringify(data[0]));
         if(obj.Status=="Success")
         {
           console.log("Found Valid Pincode ");
          this.isInvalidPin=false;

           let postOffice=obj.PostOffice[0];
           let state_name=postOffice.State;
           console.log("State---> "+state_name);
           this.addOnData.state_main=state_name;

           this.addOnData.state_av_list=new Set();
          this.addOnData.AREA=state_name;
           for(let data of this.FullData)
           {
             if(data["AREA"]==state_name)
             {
              this.addOnData.state_av_list.add(data["CITY"]);
             }
           }
         }else
         {
          console.log("Found Invalid Pincode ");
          this.isInvalidPin=true;
         }
           
          }
        );
      }
    
    }else
    {
      console.log("pincode length not correct");
    }

    // now get State and city based data....
    this.service.getNeighbourList(this.PINCODE);

   

    
  }

  toggle()
  {
    console.log("toogling value from "+this.toogleInput);
    this.PINCODE='';
    this.checkCalled=false;
    this.toogleInput=this.toogleInput?false:true;
  }

}
