import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
      providedIn: 'root'
}) 

export class AccionProximidad {
        
    accionPadre$= new EventEmitter();
    accionHijo$= new EventEmitter();
    

    constructor() {}
}