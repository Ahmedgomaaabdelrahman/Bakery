import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { MainProvider } from './../../providers/main';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login';
import { CustomerProvider } from '../../providers/customer';
import { CommonServiceProvider } from '../../providers/common-service';


@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  public categories : any;
  public MainProvider = MainProvider;

  constructor(public customer:CustomerProvider,public common:CommonServiceProvider,public _app:App,public product:ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
     
  }

  ionViewWillEnter() {
    this.product.getAllProducts().subscribe((res)=>{
    this.categories = res;
    console.log(this.categories);
  })
  }
  
  getCatItems(catid){
    if(this.customer.currentuser){
    this.navCtrl.push(HomePage,{catid : catid})
    }
    else{
      this.common.presentToast('you should login');
      this._app.getRootNav().setRoot(LoginPage);
    }
  }
  goCart(){
    this.navCtrl.push(CartPage);
  }
}
