import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/newsservice/data';

/**
 * Generated class for the EntertainmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage implements OnInit{

  sportsNews = [];
  constructor(public navCtrl: NavController,public data:Data, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  ngOnInit() {
    this.data.getSportNews().subscribe((data) => {
      this.sportsNews = data.articles;
    })
  }

}
