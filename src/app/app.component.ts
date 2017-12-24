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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages : Array<{title : string , component:any}>;

  constructor(public translate:TranslateService,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
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
}

