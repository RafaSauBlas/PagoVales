import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValesService } from './services/vales.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ValesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }