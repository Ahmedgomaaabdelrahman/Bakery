import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
public about : any [] = [];
constructor(public product :ProductProvider,public navCtrl: NavController, public navParams: NavParams) {

       this,product.About().subscribe((res)=>{
         this.about = res[0];
         console.log(this.about);
       })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
 
}
