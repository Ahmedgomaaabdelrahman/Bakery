import { MainProvider } from './../../providers/main';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomerProvider } from '../../providers/customer';
import { Platform, Nav, NavController } from 'ionic-angular';
import { CommonServiceProvider } from '../../providers/common-service';
import { SearchPage } from './../../pages/search/search';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the YellowheadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'yellowhead',
  templateUrl: 'yellowhead.html'
})
export class YellowheadComponent {
  public search : any;
  public flag : boolean = false;
  public MainProvider = MainProvider;

  constructor(public nativeStorage:NativeStorage,public navCtrl:NavController,public translate:TranslateService,public customer:CustomerProvider,public platform:Platform,public common:CommonServiceProvider,) {
    console.log('Hello YellowheadComponent Component');
   
  }
  changeLangar(){
   
       this.platform.setDir('rtl',true);
       this.translate.setDefaultLang('ar');
       MainProvider.lang = 'ar';
       console.log(MainProvider.lang);
       this.saveLang('ar');
       this.flag = true;
      
    }

  changeLangen(){
       this.platform.setDir('ltr',true);
       this.translate.setDefaultLang('en');
       MainProvider.lang = 'en',
       console.log(MainProvider.lang);
       this.saveLang('en');
       this.flag = false;
       
   }

   gosearch(){ 
    this.navCtrl.push(SearchPage);
  }
  saveLang (lang){
    this.nativeStorage.setItem('lang',lang).then((res)=>{
      console.log("Item Stored !!");
    }).catch((error)=>{
      console.log("Error In Saving Item");
    });
  }
}
