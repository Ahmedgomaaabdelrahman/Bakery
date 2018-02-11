import { OrdermapPage } from './../ordermap/ordermap';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { RatePage } from '../rate/rate';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  public invoice : any [];

  constructor(public common:CommonServiceProvider,public view:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.invoice = this.navParams.get('invoice');
    console.log(this.invoice);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }
 
  dismiss(){
    this.view.dismiss();
    this.common.createModel(RatePage);
  }
  gohome(){
    this.navCtrl.push(HomePage);
  }
}
