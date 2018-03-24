import { MainProvider } from './../../providers/main';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomerProvider } from '../../providers/customer';
import { Platform } from 'ionic-angular';
import { CommonServiceProvider } from '../../providers/common-service';

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

  public flag : boolean = false;
  public MainProvider = MainProvider;

  constructor(public translate:TranslateService,public customer:CustomerProvider,public platform:Platform,public common:CommonServiceProvider,) {
    console.log('Hello YellowheadComponent Component');
   
  }
  changeLangar(){
   
       this.platform.setDir('rtl',true);
       this.translate.setDefaultLang('ar');
       MainProvider.lang = 'ar';
       console.log(MainProvider.lang)
       this.flag = true;
      
    }

  changeLangen(){
       this.platform.setDir('ltr',true);
       this.translate.setDefaultLang('en');
       MainProvider.lang = 'en',
       console.log(MainProvider.lang)
       this.flag = false;
       
   }
  
}
