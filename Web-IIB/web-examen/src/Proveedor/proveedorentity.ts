import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductoEntity} from "../producto/producto.entity";


@Entity('proveedor')
export class Proveedorentity {

    @PrimaryGeneratedColumn()
    proveedor_id: number;

    @Column()
    e: number;



    @ManyToOne(
        type => ProductoEntity,
        aplicacion => aplicacion.ProductoId
    )
    so_id: ProductoEntity;

  /*  @ManyToOne(
        type => EventoEntity,
        eventohijo => eventohijo.eventohijo_id
    )
    eventhijo_id: EventoHijoEntity;

*/

}