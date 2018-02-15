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
  public cartItems = [];
  totalprice : number = 0;
  price : number = 0;
  quantity:number = 0;
  constructor(public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    //  this.ionViewWillEnter();
   }
   ionViewDidLoad(){
     this.product.getCart(this.customer.currentuser.user_id).subscribe((res)=>{
      this.cartItems = res;
      console.log(this.customer.currentuser.user_id);
      console.log(res);
      for (let i=0 ; i<this.cartItems.length;i++){
        this.price = parseInt(this.cartItems[i].items.price);
        this.quantity = parseInt(this.cartItems[i].quantity);
        this.totalprice  = this.totalprice + (this.price*this.quantity);
       
      }
      console.log(this.totalprice);
    });
    }

golocation(){
   this.navCtrl.push(LocationsPage , { amount : this.totalprice});
}

deleteItem(i,itemid){
  this.product.delCartItem(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
    console.log(res);
    if (res == true){
      this.product.getCart(this.customer.currentuser.user_id).subscribe((res)=>{
        this.cartItems = res;
        console.log(this.cartItems);
      });
    }
    this.totalprice  = this.totalprice - (this.cartItems[i].items.price*this.cartItems[i].quantity);
  })
}

increaseQuan(i,quanno,itemid,catid){
  quanno.value++;
  console.log(quanno.value);
  this.product.addToCart(this.customer.currentuser.user_id,itemid,quanno.value,catid).subscribe((res)=>{
    console.log(res);
  });
  let itemprice = parseInt(this.cartItems[i].items.price)
  this.totalprice  = this.totalprice + itemprice;
}
decreaseQuan(i,quanno,itemid,catid){

  if(quanno.value == 1 || quanno.value == 0){
    document.getElementById('remove').style.pointerEvents = 'none';
    this.deleteItem(i,itemid);
  }
  else{
    quanno.value--;
    console.log(quanno.value);
    this.product.addToCart(this.customer.currentuser.user_id,itemid,quanno.value,catid).subscribe((res)=>{
      console.log(res);
    });
    this.totalprice  = this.totalprice - this.cartItems[i].items.price;
  }
 
  
}


}
