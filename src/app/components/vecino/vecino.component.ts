import { Component } from "@angular/core";
import { DataAccion } from "../../services/data.service";

 @Component ({
    selector:"component-vecino",
    templateUrl:"./vecino.component.html"
 })

 export class ComponentVecino {
    

  constructor(public accionData:DataAccion){}



}