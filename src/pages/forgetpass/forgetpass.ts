import { CommonServiceProvider } from './../../providers/common-service';
import { CustomerProvider } from './../../providers/customer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
CommonServiceProvider

@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {
  email : any;
  constructor(public comm:CommonServiceProvider,public CustomerProvider:CustomerProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }
exist(){
  this.navCtrl.pop();
}
forgetPass(){ 
  this.CustomerProvider.forgetPass(this.email).subscribe((res)=>{
    console.log(res)
    if(res.Error){
      this.comm.presentToast(res.Error);
    }
   else
     this.comm.presentToast(res.Success);
     this.navCtrl.pop();
   
  });
}
}
