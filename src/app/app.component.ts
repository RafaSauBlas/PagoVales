import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { ValesService } from './services/vales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public info : any = null;
  public images : any = null;
  public imagen : any = null;
  public imagen1 : any = null;
  public imagen2 : any = null;
  public imagen3 : any = null;
  public title : string = "Vale";
  //Esta variale nos sirve para limpiar el textbox del distribuidor siempre que ejecutemos cualquier consulta
  busqueda = '';

  constructor(private valesServices: ValesService){}

  //Este metodo trae la información del distribuidor especificado
  getCharacters(distrib : number) {
    this.valesServices.distribuidor(distrib).subscribe(response => {
      //Se guarda la respuesta que retorna la ruta de la api en la variable "info" que es la que se utiliza desde la vista HTML
      this.info = response;

      //Esta condicion solo es para agregarle un '0' al inicio en la cadena del saldo, para que no aparesca de la siguiente forma ".00"
      if(this.info[0].Saldo == ".00"){
         this.info[0].Saldo = "0.00";
      }
      this.busqueda = '';
    })
  }

  //Este metodo trae las firmas asignadas al distribuidor
  getFirmas(distrib : number){
    this.valesServices.distribuidorFirmas(distrib).subscribe(response =>{
      this.images = response;
      //Aquí el string 'data:image/png;base64,' es obligatorio ya que este es el que decodifica la base 64 para que se puedan mostrar en la página
      this.imagen = 'data:image/png;base64,' + this.images[0];
      this.imagen1 = 'data:image/png;base64,' + this.images[1];
      //Estas condiciones sirven para limpiar las variables si es que el arreglo no trae ninguna imagen, esto con el fin de quue las imagenes -
      //anteriores no se queden guardadas y que no se muestren las mismas cuando se busca otro distribuidor
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

  //Este se encarga de verificar que el número de distribuidor que introdujimos sea de un distribuidor valido
  getExist(distrib : number) {
    this.valesServices.distribuidorExist(distrib).subscribe(response => {
      if(response == 0){
        alert("El distribuidor que usted busca no existe, verifique que el dato que introdujo sea correcto.");
        this.busqueda = '';
      }
    })
  }

  buscar(event: KeyboardEvent, distrib : string) {
    var cod = event.keyCode;
    //Esta condicion sirve para que se ejecuten los metodos seleccionados solo cuando se preciona la tecla "Enter"
    if(cod == 13){
      var scope = parseInt(distrib, 10);
      this.getCharacters(scope);
      this.getFirmas(scope);
      this.getExist(scope);
    }
  }
}