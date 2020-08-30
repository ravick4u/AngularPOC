import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { ApplistComponent } from './applist/applist.component';
import { AppgridComponent } from './appgrid/appgrid.component';
import { AppexpansionComponent } from './appexpansion/appexpansion.component';
import { AppcardsComponent } from './appcards/appcards.component';
import { ApptabsComponent } from './apptabs/apptabs.component';
import { AppstepperComponent } from './appstepper/appstepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    AppmenuComponent,
    ApplistComponent,
    AppgridComponent,
    AppexpansionComponent,
    AppcardsComponent,
    ApptabsComponent,
    AppstepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
