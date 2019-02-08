import { EventoPeliculaEntity } from "src/evento-pelicula/evento.entity";
export declare class EventoEntity {
    id: number;
    nombre: string;
    fecha: string;
    latitud: number;
    longitud: number;
    eventoPelicula: EventoPeliculaEntity[];
}
