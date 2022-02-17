import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) {

   }
    getDBurl():Observable<string>{
     return this.http.get<string>('assets/indusind_cc_data.json');

   }

   getState(pincode:string):Observable<JSON[]>{

    var URL='https://api.postalpincode.in/pincode/'+pincode;
     return this.http.get<JSON[]>(URL);
   }
}
