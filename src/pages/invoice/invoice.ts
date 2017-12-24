import { OrdermapPage } from './../ordermap/ordermap';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  constructor(public common:CommonServiceProvider,public view:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }
 
  dismiss(){
    this.view.dismiss();
    this.common.createModel(OrdermapPage);
  }
}
