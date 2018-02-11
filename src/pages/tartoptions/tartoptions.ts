import { MainProvider } from './../../providers/main';
import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';




@Component({
  selector: 'page-tartoptions',
  templateUrl: 'tartoptions.html',
})
export class TartoptionsPage {
  public colors : any[];
  public sizes : any[];
  public adds : any[];
  public MainProvider = MainProvider;
  constructor(public product:ProductProvider,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TartoptionsPage');
    this.product.getTartAdds().subscribe((res)=>{
      this.adds = res;
      console.log(this.adds);
    });
    this.product.getTartColor().subscribe((res)=>{
      this.colors = res;
      console.log(this.colors);
    });
    this.product.getTartSize().subscribe((res)=>{
      this.sizes = res;
      console.log(this.sizes);
    });
  }
 dismiss(){
    this.viewCtrl.dismiss();
  }
}
