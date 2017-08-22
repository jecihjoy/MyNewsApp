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
  selector: 'page-google',
  templateUrl: 'google.html',
})
export class GooglePage implements OnInit{

  googleNews = [];
  constructor(public navCtrl: NavController,public data:Data, public navParams: NavParams) {
  }

  ngOnInit() {
    this.getNews();
   
  }
  getNews(){
    this.data.getGoogleNews().subscribe((data)=>{
      this.googleNews = data.articles;
    })
  }

}
