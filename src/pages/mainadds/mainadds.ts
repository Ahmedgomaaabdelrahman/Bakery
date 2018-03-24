import { DetailsPage } from './../details/details';
import { MainProvider } from './../../providers/main';
import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Observable, Subscriber} from "rxjs";
@Component({
  selector: 'page-mainadds',
  templateUrl: 'mainadds.html',
})
export class MainaddsPage {
  public sliderprods : any[] = [];
  public otherOffers : any [] =[] ;

  public mainProvider = MainProvider;
  constructor(public product:ProductProvider, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainaddsPage');
    this.product.getsliderOffer().subscribe((res)=>{
      this.sliderprods = res;
      console.log(this.sliderprods);
    });

    this.product.getOtherOffer().subscribe((res)=>{
      this.otherOffers = res;
      console.log(this.otherOffers);
    });
  }

  godetails(images,name,details,quantity,rate,itemid,catid) {
    this.navCtrl.push(DetailsPage,{images: images,name:name,details:details,quantity:quantity,rate:rate,itemid:itemid,catid:catid})
  }

}
