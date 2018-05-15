import { TartoptionsPage } from './../tartoptions/tartoptions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { MainProvider } from './../../providers/main';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from '../../providers/customer';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public images : any [] = [] ;
  public name : string;
  public details : any;
  public rate : any;
  public quantiy : any;
  public catid:any;
  public itemid:any;
  public subcatid:any;
  public MainProvider = MainProvider;
 

  constructor(public _app:App,public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
     this.images = this.navParams.get('images');
     this.name = this.navParams.get('name');
     this.details = this.navParams.get('details');
     this.quantiy = this.navParams.get('quantity');
     this.rate = this.navParams.get('rate');
     this.itemid = this.navParams.get('itemid');
     this.catid = this.navParams.get('catid');
     this.subcatid = this.navParams.get('subcatid');

    console.log("From Details",this.navParams.get('name'),this.navParams.get('details'),this.navParams.get('quantiy') , this.navParams.get('rate'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
   
  tartOptions(){
    console.log(this.quantiy);
    this.common.createModel(TartoptionsPage,{
      itemid:this.itemid,
      quantity:this.quantiy,
      catid:this.catid,
      subcatid:this.subcatid
    });
  }
  
  addTocart(){
    if(this.customer.currentuser){
    this.product.addToCart(false,this.customer.currentuser.user_id,this.subcatid,this.itemid,1,this.catid,"",[],"","",[]).subscribe((res)=>{
      console.log(res);
      if(res.state == false){
        this.common.presentToast("Already Added Before");
      }
      else {
        this.common.presentToast("Added Sucessfuly"); 
        this.navCtrl.pop();
      }
    });
  }
  else{
    this.common.presentToast('you should login');
    this._app.getRootNav().setRoot(LoginPage);
  }
  }
}
