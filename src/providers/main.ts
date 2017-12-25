import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MainProvider {
  public static baseUrl : string = "http//:104.131.41.125";
  public static  lang : string = '';
  constructor(public http: HttpClient) {
    console.log('Hello MainProvider Provider');
  }

}
