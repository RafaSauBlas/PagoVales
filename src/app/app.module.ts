import { DistribComponent } from './distrib/distrib.component';
import { BrowserModule } from '@angular/platform-browser';
import { ValesService } from './services/vales.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DistribComponent,
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