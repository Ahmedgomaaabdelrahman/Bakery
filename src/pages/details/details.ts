import { TartoptionsPage } from './../tartoptions/tartoptions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { MainProvider } from './../../providers/main';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from '../../providers/customer';

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
  public MainProvider = MainProvider;

  constructor(public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
     this.images = this.navParams.get('images');
     this.name = this.navParams.get('name');
     this.details = this.navParams.get('details');
     this.quantiy = this.navParams.get('quantity');
     this.itemid = this.navParams.get('itemid');
     this.catid = this.navParams.get('catid');
     console.log(this.images,this.name,this.details,this.quantiy,this.itemid,this.catid)
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
   
  tartOptions(){
    this.common.createModel(TartoptionsPage);
  }
  
  addTocart(){
    this.product.addToCart(this.customer.currentuser.user_id,this.itemid,this.quantiy,this.catid).subscribe((res)=>{
      console.log(res);
      if(res == 1){
        this.common.presentToast("Already Added Before");
      }
      else {
        this.common.presentToast("Added Successfully");
      }
    });
  }
}
