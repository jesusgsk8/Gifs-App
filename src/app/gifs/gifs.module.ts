
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/main-home/home-page.component';
import { ListComponent } from './components/list/list/list.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';




@NgModule({
  declarations: [
   HomePageComponent,
   SearchBoxComponent,
   ListComponent,
   CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
