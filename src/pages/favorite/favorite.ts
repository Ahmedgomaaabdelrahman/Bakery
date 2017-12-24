import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  constructor(public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }
presentActionSheet(){
   this.common.presentActionSheet();
}
showDetails(){
   this.common.createModel(DetailsPage);
}
}
