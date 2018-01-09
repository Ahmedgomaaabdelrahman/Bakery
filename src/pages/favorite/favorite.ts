import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from './../../providers/customer';
import { MainProvider } from './../../providers/main';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  public favItems : any [] = [];

  quandiv : any [] = [];
  btnsdiv : any [] = [];
  public allItems : any [];
  public MainProvider = MainProvider;
  constructor(public modalCtrl :ModalController,public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.product.getAllFavs(this.customer.currentuser.user_id).subscribe((res)=>{
      this.favItems = res; 
      console.log(this.favItems);
     });
  }

  ionViewWillEnter() {

    this.quandiv = [];
    this.btnsdiv = [];
    
   this.product.getAllFavs(this.customer.currentuser.user_id).subscribe((res)=>{
    this.favItems = res; 
    console.log(this.favItems);
   });

   this.product.getAllItems(this.customer.currentuser.user_id).subscribe((res)=>{
    
     console.log("All Items"+res);
     this.allItems = res;
     console.log(this.allItems);
   
     for(let i=0;i<this.allItems.length;i++){
       if(this.allItems[i].cart[0]!=null)
       { 
         this.quandiv.push('quandiv'); 
         this.btnsdiv.push('disbtn')
       }
       else  if(this.allItems[i].cart[0]==null)
       { 
         this.quandiv.push('quandivdis'); 
         this.btnsdiv.push('nondisbtn')
       }
     }
   });
  }
presentActionSheet(){
   this.common.presentActionSheet();
}


showDetails(images,name,details,quantity,itemid,catid){
  let detpage = this.modalCtrl.create(DetailsPage,{
     images : images , 
     name : name , 
     details : details , 
     quantity : quantity,
     itemid : itemid,
     catid : catid
   });
     console.log({images,name,details,quantity});
     detpage.present();
 }
//  showDetails1(){
//    this.navCtrl.push(DetailsPage);
//  }

deleteItem(itemid){
  this.product.deleteFavs(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
    console.log(res);
    this.ionViewWillEnter();
  });
}
addToCart(i,itemid,quanid,catid){
  console.log(i);
  this.product.addToCart(this.customer.currentuser.user_id,itemid,quanid,catid).subscribe((res)=>{
    console.log(res);
    if(res == 1){
      this.common.presentToast("this item already added");
    }
    else{
      this.common.presentToast("Added Successfully");
      this.quandiv[i]='quandiv';
      this.btnsdiv[i]='disbtn';
    }
  })
}

increaseQuan(quanno,itemid,catid){
  quanno.value++;
  this.product.addToCart(this.customer.currentuser.user_id,itemid,quanno.value,catid).subscribe((res)=>{
    console.log(res);
  });
}
decreaseQuan(quanno,i){
if(quanno.value > 0){
  quanno.value--;
}

  
}

goCart(){
  this.navCtrl.push(CartPage);
}
}
