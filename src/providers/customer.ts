import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProvider } from './main';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerProvider {
  public registerUrl : string = MainProvider.baseUrl+"/signup/";
  public loginUrl : string = MainProvider.baseUrl+"/login";
  public deviceToken : string ='';

  constructor(public http: Http) {
    console.log('Hello CustomerProvider Provider');
  }

  registerUesr(Email:any,Name:string,PhoneNo:any,user_id : any,image ?:any){
     let user = {
      email:Email,
      name:Name,
      phone:PhoneNo,
      image:image,
      user_id:user_id,
      token:this.deviceToken,
      device_type:1
    };
    return this.http.post(this.registerUrl+MainProvider.lang,user).map((res) => res.json());
   }


   loginUser(user_id : string){
    let user = {
      user_id : user_id
    };
    return this.http.post(this.loginUrl+MainProvider.lang,user).map((res) => res.json());
  }
}
