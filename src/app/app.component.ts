import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'indusind-cc';
cred:string='to be fetched';
 constructor(private service:DataServiceService){

 }
  ngOnInit(){
    
this.service.getDBurl().subscribe(r=>{
  this.cred=JSON.stringify(r);
})
   
  }

}
