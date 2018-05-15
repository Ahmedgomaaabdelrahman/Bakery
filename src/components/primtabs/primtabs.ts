import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { CategoryPage } from '../../pages/category/category';
import { FavoritePage } from '../../pages/favorite/favorite';
import { HistoryPage } from '../../pages/history/history';
import { SettingsPage } from '../../pages/settings/settings';

/**
 * Generated class for the PrimtabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'primtabs',
  templateUrl: 'primtabs.html'
})
export class PrimtabsComponent {
  tab1Root: any = HomePage;
  tab2Root: any = CategoryPage;
  tab3Root: any = FavoritePage;
  tab4Root: any = HistoryPage;
  tab5Root: any = SettingsPage;
  text: string;

  constructor() {
    console.log('Hello PrimtabsComponent Component');
    this.text = 'Hello World';
  }

}
