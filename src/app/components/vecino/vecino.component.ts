import { Component } from "@angular/core";
import { AccionProximidad } from "src/app/services/proximidad.service";
import { DataAccion } from "../../services/data.service";

 @Component ({
    selector:"component-vecino",
    templateUrl:"./vecino.component.html"
 })

 export class ComponentVecino {
    

  constructor(public accionData:DataAccion, 
    private accionVecinoData:AccionProximidad){}

  chAccionVecino(){
    this.accionVecinoData.accionPadre$.emit('Vesino sobre el Padre')
    this.accionVecinoData.accionHijo$.emit('Vesino sobre el Hijo')
    this.accionData.accion='Vecino sobre si mismo'
  }

}