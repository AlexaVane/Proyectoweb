import { VentaEntity } from "../venta/venta.entity";
import { PeliculaEntity } from "../pelicula/pelicula.entity";
export declare class CarritoEntity {
    id: number;
    venta: VentaEntity;
    pelicula: PeliculaEntity;
}
