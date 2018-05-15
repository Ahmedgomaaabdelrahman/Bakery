import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';



@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
  public about : any [] = [];
  constructor(public product :ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
    this,product.About().subscribe((res)=>{
      this.about = res[0];
      console.log(this.about);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}
