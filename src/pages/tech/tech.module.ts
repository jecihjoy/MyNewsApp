import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechPage } from './tech';

@NgModule({
  declarations: [
    TechPage,
  ],
  imports: [
    IonicPageModule.forChild(TechPage),
  ],
})
export class TechPageModule {}
