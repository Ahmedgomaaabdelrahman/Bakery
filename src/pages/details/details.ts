import { TartoptionsPage } from './../tartoptions/tartoptions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import { MainProvider } from './../../providers/main';

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

  public MainProvider = MainProvider;
  constructor(public common:CommonServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
     this.images = this.navParams.get('images');
     this.name = this.navParams.get('name');
     this.details = this.navParams.get('details');
     this.quantiy = this.navParams.get('quantity');
     console.log(this.images,this.name,this.details,this.quantiy)
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
   
  tartOptions(){
    this.common.createModel(TartoptionsPage);
  }
 
}
