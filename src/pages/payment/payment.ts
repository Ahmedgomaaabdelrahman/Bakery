import { ProductProvider } from './../../providers/product';
import { InvoicePage } from './../invoice/invoice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { PaypalinfoPage } from '../paypalinfo/paypalinfo';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { CustomerProvider } from '../../providers/customer';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  
  public amount:any;
  public locid : any;
  public resitems = [];
  public payment : string;
  flag;
  constructor(private customer:CustomerProvider,private product:ProductProvider,private payPal: PayPal,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PaymentPage');
    this.amount = this.navParams.get('amount');
    this.locid = this.navParams.get('locid');
    console.log(this.amount);
    console.log(this.locid);
  }
   
  makeOrder(){
    console.log(this.payment);
    this.product.makeOrder(this.customer.currentuser.user_id,this.amount,this.locid , this.payment).subscribe((res)=>{
      console.log("Order Info", res);
      this.resitems = res ;
      console.log(this.resitems);
        this.navCtrl.push(InvoicePage, {invoice : this.resitems});
    });
  }

  changetoCash(){ 
    this.payment = 'Cash'; 
    this.flag = true;
  }
  changepay(){ 
    this.flag = true;
    this.payment = 'Paypal';
    this.payPal.init({
    PayPalEnvironmentProduction: 'AT4frBtKvUL6p4MSRXx-vH8io20OP3G4hdWgbU7N3mOdiBrVEQrZlBFpVsBWKn1vlJR8cwxFsDgWeDaj',
    PayPalEnvironmentSandbox: 'ARfmwjYhIZPsINH5WGzcJn_J-maPovyeWW0eCQMTUYWB0UbSZ3TJehFwKX8LzwS-_4H-JHfYrvYkjjam'
  }).then(() => {
    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
    this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      // Only needed if you get an "Internal Service Error" after PayPal login!
      //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
    })).then(() => {
      let payment = new PayPalPayment(this.amount, 'USD', 'Description', 'sale');
      this.payPal.renderSinglePaymentUI(payment).then(() => {
        // Successfully paid
  
        // Example sandbox response
        //
        // {
        //   "client": {
        //     "environment": "sandbox",
        //     "product_name": "PayPal iOS SDK",
        //     "paypal_sdk_version": "2.16.0",
        //     "platform": "iOS"
        //   },
        //   "response_type": "payment",
        //   "response": {
        //     "id": "PAY-1AB23456CD789012EF34GHIJ",
        //     "state": "approved",
        //     "create_time": "2016-10-03T13:33:33Z",
        //     "intent": "sale"
        //   }
        // }
      }, () => {
        // Error or render dialog closed without being successful
      });
    }, () => {
      // Error in configuration
    });
  }, () => {
    // Error in initialization, maybe PayPal isn't supported or something else
  });
  }
}
