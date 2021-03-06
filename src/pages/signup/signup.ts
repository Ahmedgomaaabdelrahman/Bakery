import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer';
import { CommonServiceProvider } from './../../providers/common-service';
import { NativeStorage } from '@ionic-native/native-storage';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
      @ViewChild('username') uname ;
      @ViewChild('email') email ;
      @ViewChild('password') password ;
      @ViewChild('phone') phone ;
     
  constructor(public nativeStorage:NativeStorage,public comm:CommonServiceProvider,public customer : CustomerProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
 signIn(){
   this.navCtrl.push(LoginPage);
 }
  gomain(){
    this.customer.registerUesr(this.email.value,this.uname.value,this.phone.value,this.password.value).subscribe((res)=>{
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


  saveItem(user : any){
    this.nativeStorage.setItem('user',user).then((res)=>{
      console.log("Item Stored !!");
    }).catch((error)=>{
      console.log("Error In Saving Item");
    });
  }
 

}
