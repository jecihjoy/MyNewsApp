import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  private baseUrl:string = 'https://newsapi.org/v1/articles';
  private apiKey:string = '4b60cb6a7714467494d50d7cca19c7e8';

  // url: string = 'https://public-api.wordpress.com/rest/v1.1/sites/rtankip.wordpress.com/posts/?';
  // public loadedPosts:ReplaySubject<any> = new ReplaySubject(1);

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  getUrl(){
    return this.baseUrl;
  }

  getGoogleNews():Observable<any> {
    let source = 'google-news';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source',source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
       search : params
    }).map((data) => {
      return data.json();
    });
  }

  getTechNews():Observable<any> {
    let source = 'the-next-web';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source', source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
      search : params
    }).map((response:Response) => {
      return response.json();
    });

  }

   getSportNews():Observable<any> {
    let source = 'four-four-two';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source', source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
      search : params
    }).map((response:Response) => {
      return response.json();
    });

  }

  getEnterNews():Observable<any> {
    let source = 'entertainment-weekly';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source', source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
      search : params
    }).map((response:Response) => {
      return response.json();
    });

  }
}


  /*loadAll() {
    this.http.get(this.url+'all').map(res => res.json()).subscribe(res => this.loadedPosts.next(res));
    return this.loadedPosts;
  }

  loadPosts(category) {
    this.http.get(this.url+ 'category=' + category).map(res => res.json()).subscribe(res => this.loadedPosts.next(res));
    return this.loadedPosts;
  }*/
