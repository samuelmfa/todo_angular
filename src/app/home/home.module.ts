
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './../components/components.module';

import { HomeComponent } from './home.component';

import { HomeService } from './home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
