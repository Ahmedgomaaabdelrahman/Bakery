import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProvider } from './main';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerProvider {
  public registerUrl : string = MainProvider.baseUrl+"/signup/";
  public loginUrl : string = MainProvider.baseUrl+"/login/";
  public updateUrl : string = MainProvider.baseUrl+"/editaccount/";
  public facebookUrl : string = MainProvider.baseUrl+"/facebookAuth";
  public tiwtterUrl : string = MainProvider.baseUrl+"/tweeterAuth";
  public deviceToken : string ='';
  public currentuser : any;
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
    return this.http.post(this.registerUrl+MainProvider.lang,user).map((res) => res.json());
   }


   loginUser(phone : any , password : any){
    let user = {
      phone : phone,
      password : password
    };
    return this.http.post(this.loginUrl+MainProvider.lang,user).map((res) => res.json());
  }
  updateUser(Email:any,Name:string,PhoneNo:any,Password:any,img :any){
    let user = {
     user_id:this.currentuser.user_id, 
     email:Email,
     name:Name,
     phone:PhoneNo,
     password:Password,
     image:img
   };
   return this.http.post(this.updateUrl+MainProvider.lang,user).map((res) =>{
    console.log(res); 
    res.json()});
  }

  facebooklogin(Name:string,Faceid:any,Email?:any){
    let user = {
      name:Name,
      email:Email,
      facebookId:Faceid,
      type:1
   };
   return this.http.post(this.facebookUrl,user).map((res) => res.json());
  }
  twitterLogin(Name:string,tweeterId:any,Email?:any){
    let user = {
      name:Name,
      email:Email,
      tweeterId:tweeterId,
      type:1 
      
    };
    return this.http.post(this.tiwtterUrl,user).map((res) => res.json());
  }
}
