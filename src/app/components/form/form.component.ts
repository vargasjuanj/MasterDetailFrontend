import { Component, OnInit, Host, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DetallePlato } from 'src/app/model/detalle-plato';
import { TablaDetalleComponent } from '../tabla-detalle/tabla-detalle.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  idAux: number = Math.random()



  constructor(@Host() private tabla: TablaDetalleComponent, private formBuilder: FormBuilder) {
    this.emitirDetalle = new EventEmitter();
  }
  @Output() public emitirDetalle: EventEmitter<DetallePlato>
  @Input() set detalleDelHijo(valor) {
    this.onBuild();
    if (valor) {
      this.detallePlatoOriginal = valor;
      this.formDetalle.patchValue({
        id: valor.id,
        cantidad: valor.cantidad,
        articulo: valor.articulo
      });

      if (valor.id !== null) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    }
  }

  @ViewChild('btnClose') btnClose: ElementRef;

  public formDetalle: FormGroup;
  public detallePlatoOriginal: any;
  public edit = false;
  public isError = false;

  ngOnInit() {
    this.onBuild();
  }

  onBuild() {
    this.formDetalle = this.formBuilder.group({
      id: new FormControl(null),
      cantidad: new FormControl('', Validators.required),
      articulo: new FormControl('', Validators.required)
    });
  }

  save(formDetalle: FormGroup): void {
    if (formDetalle.invalid) {
      this.isError = true;
    } else {

      if (formDetalle.value.id === null) {

        // Agregar
        this.add(formDetalle.value);


      } else {

        this.update(formDetalle.value);
      }
      this.btnClose.nativeElement.click();
    }
  }

  add(detalle: DetallePlato) {
    // this.tabla.detallesHijo.push(detalle); //Me agrega dos registros iguales si la descomento, porque trabajan con la misma referencia 
    this.emitirDetalleAlPadre(detalle)
  }

  update(detalle: DetallePlato) {
    this.emitirDetalleAlPadre(detalle)

  }

  onClose() {
    this.detalleDelHijo = {
      id: null,
      cantidad: null,
      articulo: ''
    };
    this.isError = false;
  }

  onCloseAlert() {
    this.isError = false;
  }
  emitirDetalleAlPadre(detalle: DetallePlato) {
    console.log("emitiendo desde form")
    console.log(detalle)
    this.emitirDetalle.emit(detalle)
  }
}
