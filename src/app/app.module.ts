import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { PlatoComponent } from './components/plato/plato.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { TablaDetalleComponent } from './components/tabla-detalle/tabla-detalle.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    PlatoComponent,
    TablaComponent,
    TablaDetalleComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
