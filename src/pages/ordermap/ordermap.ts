import { RatePage } from './../rate/rate';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';

@Component({
  selector: 'page-ordermap',
  templateUrl: 'ordermap.html',
})
export class OrdermapPage {
  public flag : boolean = false;
  constructor(public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdermapPage');
  }
 
 changeFlag(){
  
   if(this.flag){
     this.common.createModel(RatePage);
   }
    this.flag = true;
 }
 
}
