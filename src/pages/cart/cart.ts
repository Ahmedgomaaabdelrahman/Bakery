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
     this.product.getUserCart(this.customer.currentuser.user_id).subscribe((res)=>{
      this.cartItems = res;
      console.log(this.customer.currentuser.user_id);
      console.log(this.cartItems);
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

deleteItem(i,cartid){
  this.product.delCartItem(cartid).subscribe((res)=>{
    console.log(res);
    if (res.state == true){
      this.product.getUserCart(this.customer.currentuser.user_id).subscribe((res)=>{
        this.cartItems = res;
        console.log(this.cartItems);
      });
    }
    this.totalprice  = this.totalprice - (this.cartItems[i].items.price*this.cartItems[i].quantity);
  })
}

increaseQuan(i,catid,quanno){
  quanno.value++;
  // console.log(quanno.value);
  this.product.modifyQuan(catid,"plus").subscribe((res)=>{
    console.log(res);
  });
  let itemprice = parseInt(this.cartItems[i].items.price) 
  this.totalprice  = this.totalprice + itemprice;
}


decreaseQuan(i,catid,quanno,itemid){ 

  if(quanno.value > 1){
    quanno.value--;
    console.log(quanno.value);
    this.product.modifyQuan(catid,"subtract").subscribe((res)=>{
      console.log(res);
    });
    
      this.totalprice  = this.totalprice - this.cartItems[i].items.price;
  } 
  // else{
  
    
  // }
 
  
}


}
