import { DistmapPage } from './../distmap/distmap';
import { CustomerProvider } from './../../providers/customer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from '../../providers/main';


@Component({
  selector: 'page-dist-orders',
  templateUrl: 'dist-orders.html',
})
export class DistOrdersPage {
  myOrders ;
  public mainProvider = MainProvider;
  constructor(public customer:CustomerProvider,public navCtrl: NavController, public navParams: NavParams) {
        this.customer.getDistOrders().subscribe((res)=>{
           this.myOrders = res;
           console.log(this.myOrders);
        });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistOrdersPage');
  }
 
  gotolocation(location){
    this.navCtrl.push(DistmapPage, {location:location});
  }
  finishOrder(orderid){
    this.customer.deliverOrder(orderid).subscribe((res)=>{
      console.log(res);
      if(res.state == 202){
        this.customer.getDistOrders().subscribe((res)=>{
          this.myOrders = res;
          console.log(this.myOrders);
       });
      }
    });
  }
}
