import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    ScrollPanelModule
    // TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
