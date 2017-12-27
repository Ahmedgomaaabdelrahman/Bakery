import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProvider } from './main';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerProvider {
  public registerUrl : string = MainProvider.baseUrl+"/signup/";
  public loginUrl : string = MainProvider.baseUrl+"/login/";
  public deviceToken : string ='';

  constructor(public http: Http) {
    console.log('Hello CustomerProvider Provider');
  }

  registerUesr(Email:any,Name:string,PhoneNo:any,Password:any){
     let user = {
      email:Email,
      name:Name,
      phone:PhoneNo,
      password:Password,
      type:1
    };
    console.log(this.registerUrl+MainProvider.lang + user.email +" "+user.name+" "+user.phone+" "+user.password);
    return this.http.post(this.registerUrl+MainProvider.lang,user).map((res) => res.json());
   }


   loginUser(phone : any , password : any){
    let user = {
      phone : phone,
      password : password
    };
    return this.http.post(this.loginUrl+MainProvider.lang,user).map((res) => res.json());
  }
}
