import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { ValesService } from './services/vales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Pago con vales';
  public info : any = null;
  public images : any = null;

  public imagen : any = null;
  public imagen1 : any = null;
  public imagen2 : any = null;
  public imagen3 : any = null;
  busqueda = '';

  constructor(private valesServices: ValesService){}

  getCharacters(distrib : number) {
    this.valesServices.distribuidor(distrib).subscribe(response => {
      this.info = response;

      if(this.info[0].Saldo == ".00"){
        this.info[0].Saldo = "0.00";
      }
      this.busqueda = '';
    })
  }

  getFirmas(distrib : number){
    this.valesServices.distribuidorFirmas(distrib).subscribe(response =>{
      this.images = response;
      this.imagen = 'data:image/png;base64,' + this.images[0];
      this.imagen1 = 'data:image/png;base64,' + this.images[1];
      if(this.images[2] == null){
        this.imagen2 = null;
      }else{
        this.imagen2 = 'data:image/png;base64,' + this.images[2];
      }
      this.imagen2 = 'data:image/png;base64,' + this.images[2];
      if(this.images[3] == null){
        this.imagen3 = null;
      }else{
        this.imagen3 = 'data:image/png;base64,' + this.images[3];
      }
    })
  }

  getExist(distrib : number) {
    this.valesServices.distribuidorExist(distrib).subscribe(response => {
      if(response == 0){
        alert("El distribuidor que usted busca no existe, verifique que el dato que introdujo sea correcto.");
        this.busqueda = '';
      }
      else{
      }
    })
  }

  search(event: KeyboardEvent, distrib : string) {
    var cod = event.keyCode;
    if(cod == 13){
      var scope = parseInt(distrib, 10);
      this.getCharacters(scope);
      this.getFirmas(scope);
      this.getExist(scope);
    }
  }
}