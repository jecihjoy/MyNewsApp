import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportsPage } from './sports';

@NgModule({
  declarations: [
    SportsPage,
  ],
  imports: [
    IonicPageModule.forChild(SportsPage),
  ],
})
export class SportsPageModule {}
