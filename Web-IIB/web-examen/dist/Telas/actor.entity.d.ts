import { PeliculaEntity } from "src/pelicula/pelicula.entity";
export declare class ActorEntity {
    id: number;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    numeroPeliculas: number;
    retirado: boolean;
    pelicula: PeliculaEntity[];
}
