import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { ApplistComponent } from './applist/applist.component';
import { AppgridComponent } from './appgrid/appgrid.component'

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    AppmenuComponent,
    ApplistComponent,
    AppgridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
