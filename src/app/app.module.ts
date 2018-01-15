import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import 'rxjs/add/operator/map';
import { FiltroPorCliente } from 'app/cliente/pipes/cliente-filter';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FiltroPorCliente
  ],
  exports: [
    ClienteComponent,
    FiltroPorCliente
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
