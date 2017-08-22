import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/newsservice/data';

@IonicPage()
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage implements OnInit{

  enterNews = [];
  constructor(public navCtrl: NavController,public data:Data, public navParams: NavParams) {
  }
  
  ngOnInit() {
    this.data.getEnterNews().subscribe((data) => {
      this.enterNews = data.articles;
        })
  }

}
