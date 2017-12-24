import { InvoicePage } from './../invoice/invoice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  
  showInv(){
   this.common.createModel(InvoicePage);
  }
}
