import { CartPage } from './../cart/cart';
import { CommonServiceProvider } from './../../providers/common-service';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController ,MenuController,ModalController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public common:CommonServiceProvider, private menuCtrl:MenuController,public navCtrl: NavController) {

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
}
