import { MainProvider } from './../../providers/main';
import { CustomerProvider } from './../../providers/customer';
import { ProductProvider } from './../../providers/product';
import { EditaccountPage } from './../editaccount/editaccount';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { HisdetailsPage } from '../hisdetails/hisdetails';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public hisarr:any [] = [];
  public name;
  public email;
  public image;
  public MainProvider = MainProvider;
  constructor(public product:ProductProvider,public customer:CustomerProvider,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
  
  ionViewWillEnter(){
    this.name=this.customer.currentuser.name;
    this.email=this.customer.currentuser.email;
    this.image = this.customer.currentuser.image;
    this.product.getHistory(this.customer.currentuser.user_id).subscribe((res)=>{
       console.log(res);
       this.hisarr = res;
       console.log(this.hisarr);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  
  editAcc(){
    this.common.createModel(EditaccountPage);
  }
  goDetails(orderinfo){
    this.navCtrl.push(HisdetailsPage , {order : orderinfo});
  }
  deleteItem(i,orderid){
    this.product.cancelOrder(this.customer.currentuser.user_id,orderid).subscribe((res)=>{
      console.log(res);
      this.ionViewWillEnter();
    });

  }
}
