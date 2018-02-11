import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from './../../providers/main';

@Component({
  selector: 'page-hisdetails',
  templateUrl: 'hisdetails.html',
})
export class HisdetailsPage {
  public order : any;
  public rateNo:number=0;
  public iconss:string[];
  public readonly maxRate: number = 5;
  public iconEmpty: string = 'star-outline';
  public iconFull: string = 'star';
  public MainProvider = MainProvider;
  constructor(public product:ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.order = this.navParams.get('order');
    console.log("order from details " ,this.order);
  }

   
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HisdetailsPage');
  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad HisdetailsPage');
  }
  rateItem(itemid ,rate){

    this.product.addRateItem(itemid , rate).subscribe((res)=>{
      console.log(res);
    });
   this.ionViewWillEnter();
  }

 
  public icons(rate : number): string[] {
    let icons = [];
    for (let i = 1; i <= this.maxRate; i++) {
      if (i <= rate) {
        icons.push(this.iconFull);
      }
      else {
        icons.push(this.iconEmpty);
      }
    }
    return icons;
  }
}
