import { ActorService } from './actor.service';
import { EventoCreateDto } from './actor-create-dto/actor-create.dto';
import { PeliculaService } from '../pelicula/pelicula.service';
export declare class ActorController {
    private readonly _actorService;
    private _peliculaService;
    constructor(_actorService: ActorService, _peliculaService: PeliculaService);
    findAll(): any;
    findOne(id: any): any;
    crearA(res: any, accion: string, titulo: string): Promise<void>;
    crearActor(res: any): Promise<void>;
    create(actorCrear: EventoCreateDto, res: any): void;
    eliminar(idActor: string, res: any): Promise<void>;
    actualizarEvento(idActor: string, response: any, error: string, sesion: any): Promise<void>;
    editarUno(idActor: any, res: any, actorEditar: EventoCreateDto): Promise<void>;
}
