import { Repository, FindManyOptions } from "typeorm";
import { EventoEntity } from "./evento.entity";
import { EventoUpdateDto } from "./evento-update-dto/evento-update.dto";
import { ActorCreateDto } from "./evento-create-dto/evento-create.dto";
export declare class EventoService {
    private readonly _eventoRepository;
    constructor(_eventoRepository: Repository<EventoEntity>);
    findOne(id: number): Promise<EventoEntity>;
    findAll(parametros?: FindManyOptions<EventoEntity>): Promise<EventoEntity[]>;
    create(datosCrearEvento: ActorCreateDto): Promise<ActorCreateDto & EventoEntity>;
    delete(id: number): Promise<import("../../../../../../../node_modules/typeorm/query-builder/result/DeleteResult").DeleteResult>;
    update(id: number, datosEditarEvento: EventoUpdateDto): Promise<import("../../../../../../../node_modules/typeorm/query-builder/result/UpdateResult").UpdateResult>;
}
