import { ForgetpassPage } from './../forgetpass/forgetpass';
import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  verificationId : any;
  code : string ="";
  constructor(public translate:TranslateService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//  send(){
//    (<any>window).FirebasePlugin.verifyPhoneNumber("+201221924616",60, (credential)=>{
//      alert("SMS Sent Successfuly");
//      console.log(credential);
//      this.verificationId = credential.verificationId;
//    },(error) =>{
//      console.log(error);
//    });
//  }

 signUp(){
   this.navCtrl.push(SignupPage);
 }
 gomain(){
   this.navCtrl.setRoot(TabsPage);
 }
 goForget(){
   this.navCtrl.push(ForgetpassPage);
 }

}
