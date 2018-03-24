import { HistoryPage } from './../history/history';
import { FavoritePage } from './../favorite/favorite';
import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-mycart',
  templateUrl: 'mycart.html',
})
export class MycartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycartPage');
  }
 

  makeOrder(){
    this.navCtrl.push(CartPage);
  }

  favorites(){
    this.navCtrl.push(FavoritePage);
  }

  history(){
    this.navCtrl.push(HistoryPage);
  }
}
