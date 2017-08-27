import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { StockDataService } from './services/index';

import { UppercaseDirective } from './directives/index';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { ErrorDialog } from './components/dialogs/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    NotFoundComponent,
    UppercaseDirective,
    ErrorDialog
  ],
  entryComponents: [
    ErrorDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    StockDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
