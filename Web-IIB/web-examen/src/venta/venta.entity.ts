import {BeforeInsert, Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../../dist/usuario/usuario.entity";
import {CarritoEntity} from "../../dist/venta/venta.entity";


@Entity('Venta')
export class VentaEntity {

    @PrimaryGeneratedColumn()
    venta_id: number;

    @Index()

    @Column(
        {
            name: 'fechaVenta',
            type: 'date'
        }
    )
    fechaVenta: Date;

    @BeforeInsert()
    antesDeInsertar() {
        console.log('Ejecutandome antes de insertar');
    }

    @BeforeInsert()
    verificarFuncion() {
        console.log('Ejecuta despues de antes de insertar');
    }


    @OneToMany(
        type => CarritoEntity, // Tipo de Dato Un Usuario a muchos
        // Libros[]
        carrito => carrito.venta // Cual es el campo FK
    )
    carrito: CarritoEntity[];


}