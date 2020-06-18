import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetallePlato } from 'src/app/model/detalle-plato';

@Component({
  selector: 'app-tabla-detalle',
  templateUrl: './tabla-detalle.component.html',
  styleUrls: ['./tabla-detalle.component.css']
})
export class TablaDetalleComponent implements OnInit {

  @Input() public detallesHijo: DetallePlato[]
  @Output() public emitirDetalle: EventEmitter<DetallePlato>;

  public detalleDelPadre: DetallePlato = {
    id: null,
    cantidad: 0,
    articulo: ''

  };
  constructor() {
    this.emitirDetalle = new EventEmitter();
  }

  ngOnInit() {
  }

  delete(detalle: DetallePlato) {
    const opcion = confirm('¿Desea quitar este detalle?');
    if (opcion === true) {
      const indexDetalle = this.detallesHijo.indexOf(detalle);
      this.detallesHijo.splice(indexDetalle, 1);
    }
  }

  onPreUpdate(detalle: DetallePlato) {
    console.log('Preupdate desde tabla-detalle')
    console.log(detalle)
    this.detalleDelPadre = detalle;
  }



  public emitirDetalleAlPadre(detalle: DetallePlato) {
    console.log('emitiendo detalle deste tabla-detalle')
    console.log(detalle)
    this.emitirDetalle.emit(detalle);
  }



}

