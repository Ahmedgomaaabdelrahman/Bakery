import { CommonServiceProvider } from './../../providers/common-service';
import { ForgetpassPage } from './../forgetpass/forgetpass';
import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import { CustomerProvider } from '../../providers/customer';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  @ViewChild('password') password;
  @ViewChild('phoneNo') phone;
  
  constructor(public nativeStorage:NativeStorage,private twitter:TwitterConnect,public fb : Facebook,public comm:CommonServiceProvider,public customer : CustomerProvider,public translate:TranslateService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


 signUp(){
   this.navCtrl.push(SignupPage);
 }
 gomain(){
    this.customer.loginUser(this.phone.value,this.password.value).subscribe((res)=>{
      console.log(res);
      if(res.error){
        this.comm.presentToast(res.error);
      }
      else{
        this.navCtrl.setRoot(TabsPage);
        this.customer.currentuser = res;
        this.saveItem(res);
      }
      
  });

 }
 goForget(){
   this.navCtrl.push(ForgetpassPage);
 }
 saveItem(user : any){
  this.nativeStorage.setItem('user',user).then((res)=>{
    console.log("Item Stored !!");
  }).catch((error)=>{
    console.log("Error In Saving Item");
  });
}
 logFace(){
    this.fb.login(['public_profile', 'user_friends', 'email','pages_messaging_phone_number'])
    .then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res);
      
      this.fb.api("/"+res.authResponse.userID+"/?fields=id,email,name,picture,gender",["public_profile"]).then((r)=>{
        console.log(r);
        console.log(r.name);
        this.customer.facebooklogin(r.name,r.id).subscribe((res)=>{
          console.log(res);
          this.navCtrl.setRoot(TabsPage);
        });
      })
     })
    .catch(e => console.log('Error logging into Facebook', e));
  
    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
}
onSuccess(response) {
  console.log(response);

  // Will console log something like:
  // {
  //   userName: 'myuser',
  //   userId: '12358102',
  //   secret: 'tokenSecret'
  //   token: 'accessTokenHere'
  // }
}


twitterlog(){
  this.twitter.login()
  .then((res)=>{
    console.log(res);
    this.customer.twitterLogin(res.userName,res.userId).subscribe((apires)=>{
      console.log(apires);
      this.customer.currentuser = apires;
      this.navCtrl.setRoot(TabsPage);
    });
     

  })
  .catch((err)=>{console.log(err)});
}
}
