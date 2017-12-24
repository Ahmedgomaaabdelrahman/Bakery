import { AddlocationPage } from './../addlocation/addlocation';
import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
  }
goPayment(){
  this.navCtrl.push(PaymentPage);
}
addLocation(){
  this.navCtrl.push(AddlocationPage);
}
}
