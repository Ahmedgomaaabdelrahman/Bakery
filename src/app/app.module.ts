import { TranslateModule, TranslateLoader ,TranslatePipe} from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
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
<<<<<<< HEAD
import { CustomerProvider } from '../providers/customer';
import { MainProvider } from '../providers/main';
=======
import * as firebase from 'firebase';
>>>>>>> b421f864b53e5b1574bffca810a5a5cbe915c007

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

var config = {
    apiKey: "AIzaSyAaG7DRQarTtf8UI8q1-SMHUcE4OATVfBY",
    authDomain: "bakery-e0160.firebaseapp.com",
    databaseURL: "https://bakery-e0160.firebaseio.com",
    projectId: "bakery-e0160",
    storageBucket: "bakery-e0160.appspot.com",
    messagingSenderId: "439651232463"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    TermsPage
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(fireAuth),
    IonicPageModule.forChild(AboutPage),
    AngularFireAuthModule,
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
    TermsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonServiceProvider,
    CustomerProvider,
    MainProvider
  ]
})
export class AppModule {}
