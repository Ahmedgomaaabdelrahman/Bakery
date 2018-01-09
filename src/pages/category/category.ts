import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { MainProvider } from './../../providers/main';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  public categories : any;
  public MainProvider = MainProvider;

  constructor(public product:ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
     
  }

  ionViewWillEnter() {
    this.product.getAllProducts().subscribe((res)=>{
    this.categories = res;
    console.log(this.categories);
  })
  }
  
  getCatItems(catid){
    this.navCtrl.push(HomePage,{catid : catid})
  }
  goCart(){
    this.navCtrl.push(CartPage);
  }
}
