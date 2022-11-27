import { Component, OnInit } from "@angular/core";
import { DataAccion } from "src/app/services/data.service";
@Component({
    selector:'component-padre',
    templateUrl:'padre.component.html'
})

export class ComponentPadre{

    accionDelPadre:string = 'Padre'
    accionDelHijo:string='Hijo';

    constructor( private accionData:DataAccion ){
        }

    accionPadre(){
        this.accionDelPadre= 'Padre sobre si mismo';
        this.accionDelHijo= 'Padre sobre el hijo';
        this.accionData.accion='Padre sobre el vecino'
       
    }

    accionHijoPadre(chAccion:string){
        this.accionDelPadre= chAccion;
    }


 }