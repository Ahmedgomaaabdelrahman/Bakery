import { AddlocationPage } from './../addlocation/addlocation';
import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from '../../providers/customer';


@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {
  public locations : any [] ;
  constructor(public product:ProductProvider,public customer:CustomerProvider,public navCtrl: NavController, public navParams: NavParams) {
  
  }
  ionViewWillEnter()
  {  
    this.product.getLocations(this.customer.currentuser.user_id).subscribe((res)=>{
      this.locations = res;
      console.log(this.locations);
    })
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
deleteLocation(locid){
  this.product.deleteLocations(locid).subscribe((res)=>{
    console.log(res);
    this.ionViewWillEnter();
  });
}
}
