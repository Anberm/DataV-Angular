import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewAngularModule } from 'data-view-angular/data-view-angular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
