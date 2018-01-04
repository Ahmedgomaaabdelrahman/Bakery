import { CustomerProvider } from './../../providers/customer';
import { MainProvider } from './../../providers/main';
import { CartPage } from './../cart/cart';
import { CommonServiceProvider } from './../../providers/common-service';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController, MenuController, ModalController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allcats : any [] ;
  public allItems : any [];
  public specItems : any [];
  public flag : boolean ;
  public quan : boolean;
  public catid : any;
  public MainProvider = MainProvider;
  icons : any[] = [];
  constructor(public navParams: NavParams,public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider, private menuCtrl:MenuController,public navCtrl: NavController) {

  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad HomePAge');
    this.allItems = [];
    this.icons = [];
    this.product.getAllProducts().subscribe((res)=>{
      console.log(res);
      this.allcats = res;
    });

    this.product.getAllItems(this.customer.currentuser.user_id).subscribe((res)=>{
      console.log("All Items"+res);
      this.allItems = res;
      console.log(this.allItems);
      for(let i=0;i<this.allItems.length;i++)
      {
        if(this.allItems[i].favorites[0]!=null)
        { this.icons.push('heart')}
        else  if(this.allItems[i].favorites[0]==null)
        { this.icons.push('heart-outline')}
      }
    });

  this.catid = this.navParams.get('catid');
  if(this.catid){
   this.flag = true;
   this.product.getChosItem(this.customer.currentuser.user_id,this.catid).subscribe((res)=>{
     console.log(res);
      this.specItems = res;
      
   });
  }
  }
presentActionSheet(){
  this.common.presentActionSheet();
}
showDetails(){
  this.common.createModel(DetailsPage);
}
goCart(){
  this.common.createModel(CartPage);
}

getItemsCat(catid){
  this.flag = true;
  this.product.getChosItem(this.customer.currentuser.user_id,catid).subscribe((res)=>{
    console.log(res);
     this.specItems = res;
  })
}

addToCart(i){
  console.log(i);
  // document.getElementById("i").getElementsByTagName("button").item(0).style.display = "none";
  // document.getElementById("i").getElementsByTagName("div").item(0).style.display = "block";
}

addToFav(itemid,icon){
  this.product.addtoFav(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
    console.log(res);
    if(res == false){
      this.common.presentToast("this item already added");
    }
    else if(res == true){
      this.common.presentToast("Added Successfully");
      this.icons[icon]='heart';
    }
  })
}


}
