import { LocationsPage } from './../locations/locations';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from './../../providers/customer';
import { MainProvider } from './../../providers/main';
import { CommonServiceProvider } from '../../providers/common-service';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public MainProvider = MainProvider;
  public cartItems : any [];

  constructor(public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.product.getCart(this.customer.currentuser.user_id).subscribe((res)=>{
      this.cartItems = res;
      console.log(this.cartItems);
    });
  }
golocation(){
   this.navCtrl.push(LocationsPage);
}

deleteItem(itemid){
  this.product.delCartItem(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
    console.log(res);
    this.ionViewWillEnter();
  })
}

increaseQuan(quanno,itemid,catid){
  quanno.value++;
  console.log(quanno.value)
  this.product.addToCart(this.customer.currentuser.user_id,itemid,quanno.value,catid).subscribe((res)=>{
    console.log(res);
  });
}
decreaseQuan(quanno,i){
  if(quanno.value > 0){
    quanno.value--;
    
  }
}
}
