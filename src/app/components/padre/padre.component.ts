import { Component, OnInit } from "@angular/core";
import { DataAccion } from "src/app/services/data.service";
import { AccionProximidad } from "src/app/services/proximidad.service";
@Component({
    selector:'component-padre',
    templateUrl:'padre.component.html'
})

export class ComponentPadre implements OnInit{

    accionDelHijo:string='Hijo';
    accionPadre:string = 'Padre'

    constructor( private accionData:DataAccion, 
        public accionVecinoData:AccionProximidad ){
        }

    chAccionPadre(){
        this.accionDelHijo= 'Padre sobre el hijo';
        this.accionPadre= 'Padre sobre si mismo'
        this.accionData.accion='Padre sobre el vecino'

     /*   console.log(this.accionData.accion)
       console.log(this.accionDelHijo) 
       console.log('-----------'); */
       
    }

    accionHijoPadre(chAccion:string){
        this.accionPadre= chAccion;
      //  console.log(this.accionPadre+'-----------')

    }

     ngOnInit(){
        this.accionVecinoData.accionHijo$.subscribe(newAccion => {
            this.accionDelHijo= newAccion
            }
        )
        this.accionVecinoData.accionPadre$.subscribe(newAccion => {
            this.accionPadre= newAccion
            }
        )
      }
 }