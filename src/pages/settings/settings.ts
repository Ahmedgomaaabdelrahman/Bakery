import { PaymentPage } from './../payment/payment';
import { NotificationPage } from './../notification/notification';
import { AboutPage } from './../about/about';
import { TermsPage } from './../terms/terms';
import { Component } from '@angular/core';
import { IonicPage,ActionSheetController, NavController, NavParams,Platform } from 'ionic-angular';
import { CommonServiceProvider } from './../../providers/common-service';
import {TranslateService} from "@ngx-translate/core";
import { MainProvider } from '../../providers/main';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
   
   public flag : boolean = false;

  constructor(public translate:TranslateService,public platform:Platform,public common:CommonServiceProvider,public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
 presentActionSheet() {
   this.common.presentActionSheet();
 }

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
 changeLang(){
   if(this.flag == false){
      this.platform.setDir('rtl',true);
      this.translate.setDefaultLang('ar');
      MainProvider.lang = 'ar';
      this.flag = true;
     
   }
  else if(this.flag == true){
      this.platform.setDir('ltr',true);
      this.translate.setDefaultLang('en');
      MainProvider.lang = 'en',
      this.flag = false;
       
  }
 }
}
