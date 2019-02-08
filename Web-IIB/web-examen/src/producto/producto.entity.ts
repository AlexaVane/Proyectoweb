import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TelasEntity} from "../../dist/Telas/telas.entity";


@Entity('db_producto')
export class ProductoEntity {

    @PrimaryGeneratedColumn(
    )
    ProductoId: number;

    @Column({
        type: 'varchar',
    })
    nombre: string;


    @Column({
        type: 'varchar',
    })
    descripcion: string;



    @Column({
        type: 'decimal',
    })
    precio: number;



    @Column({
        type: 'date',
    })
    fechaLanzamientoProducto: string;


    @Column({
        type: 'int',
    })
    cantidad: number;


    @Column({
        type: 'int',
    })
    color: string;


    // producto.entity.ts
    @ManyToOne(
        type => TelasEntity,
        telas => telas.TelasId
    )
    TelasId: TelasEntity;


}
