import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductoEntity} from "../producto/producto.entity";


@Entity('db_telas')
export class TelasEntity {

    @PrimaryGeneratedColumn(
    )
    TelasId: number;

    @Column({
        type: 'varchar',
    })
    nombre: string;


    @Column({
        type: 'varchar',
    })
    descripcion: string;




    // producto.entity.ts
    @OneToMany(
        type => ProductoEntity,
        producto => producto.ProductoId
    )
    ProductoId: ProductoEntity;


}
