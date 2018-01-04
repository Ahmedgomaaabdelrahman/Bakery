import { CustomerProvider } from './../providers/customer';
import { EditaccountPage } from './../pages/editaccount/editaccount';
import { SettingsPage } from './../pages/settings/settings';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { Component , ViewChild } from '@angular/core';
import { Nav ,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs'; 
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import {TranslateService} from "@ngx-translate/core";
import { CommonServiceProvider } from '../providers/common-service';
import { NativeStorage } from '@ionic-native/native-storage';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages : Array<{title : string , component:any}>;

  constructor(public nativeStorage:NativeStorage,public comm:CommonServiceProvider,public customer:CustomerProvider,public translate:TranslateService,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
       this.getItem();
      // fcm.getToken().then(token=>{
      //    this.customer.deviceToken = token;
      //    console.log("this token"+token);
      //    console.log("cutomer token"+token);
      // });
      splashScreen.hide();
      this.translate.setDefaultLang('en');
    });
    this.pages = [
      {title:'HomePage',component : TabsPage},
      {title:'Settings',component : SettingsPage},
      {title:'Account',component :  EditaccountPage}
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  getItem()
  {
     this.nativeStorage.getItem('user')
    .then(
      (data) => {
        console.log(data);
        if(data){
          this.customer.currentuser = data;
          this.nav.setRoot(TabsPage);
        }
        else{
          this.nav.setRoot(LoginPage);
        }
    
      });
  
  
  }
  // pushinit(){
  //   const options: PushOptions = {
  //     android: {
  //       senderID : '439651232463'
  //     },
  //     ios: {
  //         alert: 'true',
  //         badge: true,
  //         sound: 'false'
  //     },
  //     windows: {},
  //     browser: {
  //         pushServiceURL: 'http://push.api.phonegap.com/v1/push'
  //     }
  //  };
  //   const pushObject: PushObject = this.push.init(options);

  //   pushObject.on('notification').subscribe((notification: any) => {
  //     console.log('Received a notification', notification);
     
  //   });

  //   pushObject.on('registration').subscribe((registration: any) => {
  //     this.customer.deviceToken = registration.registrationId ;
  //     console.log('Device registered', registration);
  //    });

  //   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  
  // }
}

