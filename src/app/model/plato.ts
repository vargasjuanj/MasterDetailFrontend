import { DetallePlato } from "./detalle-plato";

export interface Plato {
    id: number,
    denominacion: string,
    tiempoPreparacion: number,
    imagen: string,
    precioVenta: number,
    detallePlato: DetallePlato[]
}