import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {VentaEntity} from "../venta/venta.entity";
import {PeliculaEntity} from "../pelicula/pelicula.entity";


@Entity('carrito')
export class CarritoEntity {


    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(
        type => VentaEntity,
        venta => venta.carrito
    )
    venta: VentaEntity;

    @ManyToOne(
        type => PeliculaEntity,
       pelicula => pelicula.carrito
    )
    pelicula: PeliculaEntity;


}


