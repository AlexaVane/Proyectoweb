import { TelasService } from './telas.service';
import { EventoCreateDto } from './actor-create-dto/actor-create.dto';
import { ProductoService } from '../pelicula/producto.service';
import { ActorEntity } from './actor.entity';
export declare class ActorController {
    private readonly _actorService;
    private _peliculaService;
    constructor(_actorService: TelasService, _peliculaService: ProductoService);
    findAll(): Promise<ActorEntity[]>;
    findOne(id: any): Promise<ActorEntity>;
    crearA(res: any, accion: string, titulo: string): Promise<void>;
    crearActor(res: any): Promise<void>;
    create(actorCrear: EventoCreateDto, res: any): void;
    eliminar(idActor: string, res: any): Promise<void>;
    actualizarEvento(idActor: string, response: any, error: string, sesion: any): Promise<void>;
    editarUno(idActor: any, res: any, actorEditar: EventoCreateDto): Promise<void>;
}
