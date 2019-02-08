import { PeliculaEntity } from "src/pelicula/pelicula.entity";
import { EventoEntity } from "src/evento/evento.entity";
export declare class EventoPeliculaEntity {
    id: number;
    pelicula: PeliculaEntity;
    evento: EventoEntity;
}
