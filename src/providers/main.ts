import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MainProvider {
  public static baseUrl : string = "http://104.131.41.125/api";
  public static  lang : string = 'en';
  constructor(public http: Http) {
    console.log('Hello MainProvider Provider');
  }

}
