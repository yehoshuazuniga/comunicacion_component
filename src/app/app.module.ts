import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentHijo } from './components/hijo/hijo.component';
import { ComponentPadre } from './components/padre/padre.component';
import { ComponentVecino } from './components/vecino/vecino.component';
import { DataAccion } from './services/data.service';
import { AccionProximidad } from './services/proximidad.service';

@NgModule({
  declarations: [
    AppComponent, ComponentPadre, ComponentHijo, ComponentVecino
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataAccion, AccionProximidad],
  bootstrap: [AppComponent]
})
export class AppModule { }
