import { HistoryPage } from './../history/history';
import { FavoritePage } from './../favorite/favorite';
import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CommonServiceProvider } from '../../providers/common-service';
import { CustomerProvider } from '../../providers/customer';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-mycart',
  templateUrl: 'mycart.html',
})
export class MycartPage {

  constructor(public customer:CustomerProvider,public common:CommonServiceProvider,public _app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycartPage');
  }
 

  makeOrder(){
    if(this.customer.currentuser){
      this.navCtrl.push(CartPage);
    }
    else{
      this.common.presentToast('you should login');
      this._app.getRootNav().setRoot(LoginPage);
    }
  }

  favorites(){
    if(this.customer.currentuser){
    this.navCtrl.push(FavoritePage);
  }
  else{
    this.common.presentToast('you should login');
    this._app.getRootNav().setRoot(LoginPage);
  }
  }

  history(){
    if(this.customer.currentuser){
    this.navCtrl.push(HistoryPage);
  }

else{
  this.common.presentToast('you should login');
  this._app.getRootNav().setRoot(LoginPage);
}
}
}
