import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

@Component({
  selector: 'page-paypalinfo',
  templateUrl: 'paypalinfo.html',
})
export class PaypalinfoPage {
  public quantity : string;
  constructor(private payPal: PayPal,public navCtrl: NavController, public navParams: NavParams) {
    
    
  }


   firePay(){
   
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaypalinfoPage');
  }

}
