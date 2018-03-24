import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MainProvider {
  public static baseUrl : string  = "http://admin.alyahyamb.com/api/";
  public static baseImg : string  = "http://admin.alyahyamb.com/profileImages/";
  public static itemsImg : string = "http://admin.alyahyamb.com/ItemImages/";
  public static catImgs : string  = "http://admin.alyahyamb.com/categoriesImages/";
  public static TartImgs : string = "http://admin.alyahyamb.com/tartImages/";
  public static TartColorsImgs : string = "http://admin.alyahyamb.com/tartColors/"
  

  public static  lang : string = 'en';
  public static cartNo : number ;
  constructor(public http: Http) {
    console.log('Hello MainProvider Provider');
  }

}
