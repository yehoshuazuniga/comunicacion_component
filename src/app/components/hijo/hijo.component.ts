import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DataAccion } from "src/app/services/data.service";
@Component({
    selector:'component-hijo',
    templateUrl:'./hijo.component.html'
})

export class ComponentHijo { 

    @Input()
    accionHijo ='Hijo'
    @Output() 
    accionPadre = new EventEmitter<string>();

    constructor(private accionData:DataAccion ){  }

    accionPropia(){
        this.accionHijo='Hijo sobre si mismo'
        this.accionPadre.emit('Hijo sabre el padre'); 
        this.accionData.accion= 'Hijo sobre el vecino'

    }
    

}