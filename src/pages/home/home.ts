import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/newsservice/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
 
  public allNews = [];

  constructor(public navCtrl: NavController, public data:Data) {

  }

  ngOnInit(): void {
    this.getAllNews();
  }

   ionViewDidLoad() {
    
  }

  getAllNews(){
      let news = [];
      this.data.getGoogleNews().subscribe((data) => {
        data.articles.forEach(element => {
          news.push(element);
        });
        
      });
      this.data.getTechNews().subscribe((data) => {
      data.articles.forEach(element => {
          news.push(element);
        });
      });
      this.data.getEnterNews().subscribe((data) => {
        data.articles.forEach(element => {
          news.push(element);
        });
      });
      this.data.getSportNews().subscribe((data) => {
          data.articles.forEach(element => {
            news.push(element);
        });
          
      });
        
      if(news){
        this.allNews = news;
      }
  }
}
