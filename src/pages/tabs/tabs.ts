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
import { MainaddsPage } from '../mainadds/mainadds';
import { MapPage } from '../map/map';
import { MycartPage } from '../mycart/mycart';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = MainaddsPage;
  tab2Root: any = MapPage;
  tab3Root: any = MycartPage;
  tab4Root: any = EditaccountPage;
  tab5Root: any = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
