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
  selector: 'page-tech',
  templateUrl: 'tech.html',
})
export class TechPage implements OnInit{

  techNews = [];
  constructor(public navCtrl: NavController,public data:Data, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  ngOnInit() {
    this.data.getTechNews().subscribe((data) => {
      this.techNews = data.articles;
    })
  }

}
