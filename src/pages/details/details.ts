import { TartoptionsPage } from './../tartoptions/tartoptions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
   
  tartOptions(){
    this.common.createModel(TartoptionsPage);
  }
 
}
