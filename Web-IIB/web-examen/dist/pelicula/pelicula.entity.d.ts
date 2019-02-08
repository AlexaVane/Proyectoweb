import { ActorEntity } from "src/actor/actor.entity";
import { EventoPeliculaEntity } from "src/evento-pelicula/evento.entity";
export declare class PeliculaEntity {
    id: number;
    nombre: string;
    anioLanzamiento: number;
    rating: number;
    actoresPrincipales: string;
    sinopsis: string;
    actor: ActorEntity;
    eventoPelicula: EventoPeliculaEntity[];
}
