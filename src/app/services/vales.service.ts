import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValesService {
  private BASE_URL = "http://127.0.0.1:8000/api/";
  constructor( private http: HttpClient ){}

  distribuidor (distrib : number){
    return this.http.get(this.BASE_URL + `distribuidores/traer?distrib=` + distrib);
  }

  distribuidorExist (distrib : number){
    return this.http.get(this.BASE_URL + `distribuidores/exist?distrib=` + distrib);
  }

  distribuidorFirmas (distrib : number){
    return this.http.get(this.BASE_URL + `distribuidores/traerf?distrib=` + distrib);
  }
}