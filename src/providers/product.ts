import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProvider } from './main';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductProvider {
  public getproductUrl : string = MainProvider.baseUrl+"/getAllCategories";
  constructor(public http: Http) {
    console.log('Hello ProductProvider Provider');
  }


 getAllProducts(){

   return this.http.get(this.getproductUrl).map((res) => res.json());
 } 
}
