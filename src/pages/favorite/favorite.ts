import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from './../../providers/customer';
import { MainProvider } from './../../providers/main';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  public favItems : any;
  public MainProvider = MainProvider;
  constructor(public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewWillEnter() {
   this.product.getAllFavs(this.customer.currentuser.user_id).subscribe((res)=>{
    this.favItems = res; 
    console.log(this.favItems);
   });
  }
presentActionSheet(){
   this.common.presentActionSheet();
}
showDetails(){
   this.common.createModel(DetailsPage);
}
deleteItem(itemid){
  this.product.deleteFavs(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
    console.log(res);
    this.ionViewWillEnter();
  });
}
}
