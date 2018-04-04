import { HisdetailsPage } from './../pages/hisdetails/hisdetails';
import { PaypalinfoPage } from './../pages/paypalinfo/paypalinfo';
import { TranslateModule, TranslateLoader ,TranslatePipe} from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
import { CommonServiceProvider } from '../providers/common-service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http'
import { AboutPage } from "../pages/about/about";
import { TermsPage } from "../pages/terms/terms";
import { TartoptionsPage } from "../pages/tartoptions/tartoptions";
import { SignupPage } from "../pages/signup/signup";
import { ShoppingcartPage } from "../pages/shoppingcart/shoppingcart";
import { SettingsPage } from "../pages/settings/settings";
import { RatePage } from "../pages/rate/rate";
import { PaymentPage } from "../pages/payment/payment";
import { OrdermapPage } from "../pages/ordermap/ordermap";
import { LoginPage } from "../pages/login/login";
import { LocationsPage } from "../pages/locations/locations";
import { InvoicePage } from "../pages/invoice/invoice";
import { HistoryPage } from "../pages/history/history";
import { ForgetpassPage } from "../pages/forgetpass/forgetpass";
import { FavoritePage } from "../pages/favorite/favorite";
import { EditaccountPage } from "../pages/editaccount/editaccount";
import { DetailsPage } from "../pages/details/details";
import { CategoryPage } from "../pages/category/category";
import { NotificationPage } from "../pages/notification/notification";
import { CartPage } from "../pages/cart/cart";
import { AddlocationPage } from "../pages/addlocation/addlocation";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomerProvider } from '../providers/customer';
import { MainProvider } from '../providers/main';
import { HttpClient } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { ProductProvider } from '../providers/product';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { PayPal } from '@ionic-native/paypal';
import { PrimtabsComponent } from '../components/primtabs/primtabs';
import { YellowheadComponent } from '../components/yellowhead/yellowhead';
import { MainaddsPage } from '../pages/mainadds/mainadds';
import { MycartPage } from '../pages/mycart/mycart';
import { MapPage } from '../pages/map/map';
import { YellowtabsComponent } from '../components/yellowtabs/yellowtabs';
import { ContactusPage } from '../pages/contactus/contactus';
import { SearchPage } from '../pages/search/search';
import { DistmapPage } from '../pages/distmap/distmap';
import { DistOrdersPage } from '../pages/dist-orders/dist-orders';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// var config = {
//     apiKey: "AIzaSyAaG7DRQarTtf8UI8q1-SMHUcE4OATVfBY",
//     authDomain: "bakery-e0160.firebaseapp.com",
//     databaseURL: "https://bakery-e0160.firebaseio.com",
//     projectId: "bakery-e0160",
//     storageBucket: "bakery-e0160.appspot.com",
//     messagingSenderId: "439651232463"
// };
// firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    AboutPage,
    AddlocationPage,
    CartPage,
    NotificationPage,
    CategoryPage,
    DetailsPage,
    EditaccountPage,
    FavoritePage,
    ForgetpassPage,
    HistoryPage,
    InvoicePage,
    LocationsPage,
    LoginPage,
    OrdermapPage,
    PaymentPage,
    RatePage,
    SettingsPage,
    ShoppingcartPage,
    SignupPage,
    TabsPage,
    TartoptionsPage,
    TermsPage,
    PaypalinfoPage,
    HisdetailsPage,
    PrimtabsComponent,
    YellowheadComponent,
    MainaddsPage,
    MycartPage,
    MapPage,
    MycartPage,
    YellowtabsComponent,
    ContactusPage,
    DistOrdersPage,
    DistmapPage
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(AboutPage),
    HttpModule,
    TranslateModule.forChild(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
  
  ],
 
  exports:[
    TranslateModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    AboutPage,
    AddlocationPage,
    CartPage,
    NotificationPage,
    CategoryPage,
    DetailsPage,
    EditaccountPage,
    FavoritePage,
    ForgetpassPage,
    HistoryPage,
    InvoicePage,
    LocationsPage,
    LoginPage,
    OrdermapPage,
    PaymentPage,
    RatePage,
    SettingsPage,
    ShoppingcartPage,
    SignupPage,
    TabsPage,
    TartoptionsPage,
    TermsPage,
    PaypalinfoPage,
    HisdetailsPage,
    PrimtabsComponent,
    YellowheadComponent,
    MainaddsPage,
    MycartPage,
    MapPage,
    MycartPage,
    YellowtabsComponent,
    ContactusPage,
    DistOrdersPage,
    DistmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonServiceProvider,
    CustomerProvider,
    Facebook,
    Camera,
    TwitterConnect,
    MainProvider,
    ProductProvider,
    NativeStorage,
    Nav,
    Geolocation,
    PayPal,
    LaunchNavigator
  ]
})
export class AppModule {}
