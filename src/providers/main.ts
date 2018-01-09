import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MainProvider {
  public static baseUrl : string = "http://104.131.41.125/api/";
  public static baseImg : string = "http://104.131.41.125/profileImages/";
  public static itemsImg : string ="http://104.131.41.125/ItemImages/";
  public static catImgs : string = "http://104.131.41.125/categoriesImages/";

  public static  lang : string = 'en';
  public static cartNo : number = 0;
  constructor(public http: Http) {
    console.log('Hello MainProvider Provider');
  }

}
