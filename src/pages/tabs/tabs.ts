import { LoginPage } from './../login/login';
import { HistoryPage } from './../history/history';
import { FavoritePage } from './../favorite/favorite';
import { ShoppingcartPage } from './../shoppingcart/shoppingcart';
import { EditaccountPage } from './../editaccount/editaccount';
import { SettingsPage } from './../settings/settings';
import { CategoryPage } from './../category/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = CategoryPage;
  tab3Root: any = FavoritePage;
  tab4Root: any = HistoryPage;
  tab5Root: any = SettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
