import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { PaymentPage } from './../payment/payment';
import { NotificationPage } from './../notification/notification';
import { AboutPage } from './../about/about';
import { TermsPage } from './../terms/terms';
import { Component } from '@angular/core';
import { IonicPage,ActionSheetController, NavController, NavParams,Platform , App } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import {TranslateService} from "@ngx-translate/core";
import { MainProvider } from '../../providers/main';
import { CustomerProvider } from '../../providers/customer';
import { NativeStorage } from '@ionic-native/native-storage';
import { CartPage } from '../cart/cart';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
   
   public flag : boolean = false;
   public MainProvider = MainProvider;
  constructor(public _app:App,public nativeStorage:NativeStorage,public translate:TranslateService,public customer:CustomerProvider,public platform:Platform,public common:CommonServiceProvider,public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  } 
//  presentActionSheet() {
//    this.common.presentActionSheet();
//  }

 goTerms(){
   this.common.createModel(TermsPage);
 }
 goAbout(){
   this.common.createModel(AboutPage);
 }
 goNotify(){
   this.common.createModel(NotificationPage);
 }
 payMethod(){
   this.common.createModel(PaymentPage);
 }

 logOut(){
   this.customer.currentuser = null;
  //  this._app.getRootNav().setRoot(LoginPage);
   this.nativeStorage.clear();
  this.platform.exitApp();
   console.log(this.customer.currentuser);
 }
 changeLang(){
   if(this.flag == false){
      this.platform.setDir('rtl',true);
      this.translate.setDefaultLang('ar');
      MainProvider.lang = 'ar';
      console.log(MainProvider.lang)
      this.flag = true;
     
   }
  else if(this.flag == true){
      this.platform.setDir('ltr',true);
      this.translate.setDefaultLang('en');
      MainProvider.lang = 'en',
      console.log(MainProvider.lang)
      this.flag = false;
      
  }
 }

 goCart(){
  this.navCtrl.push(CartPage);
}
}
