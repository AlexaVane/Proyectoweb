import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindManyOptions } from "typeorm";
import { PeliculaEntity } from "./pelicula.entity";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaUpdateDto } from "./pelicula-update-dto/pelicula-update.dto";
import { TelasService } from "src/actor/telas.service";
import { ActorEntity } from "src/actor/actor.entity";


@Injectable()

export class ProductoService {
    constructor(
        @InjectRepository(PeliculaEntity)
        private readonly _peliculaRepository: Repository<PeliculaEntity>,
        @Inject(forwardRef(()=> TelasService))
        private readonly actorService: TelasService
    ) { }

    async findOne(id: number) {
        return await this._peliculaRepository.findOne(id);
    }

    async findAll(parametrosConsulta?:FindManyOptions<PeliculaEntity>):Promise<PeliculaEntity[]> {      
        return await this._peliculaRepository.find(parametrosConsulta);
    }

    async create(datosCrearPelicula: PeliculaCreateDto) {
        return await this._peliculaRepository.save(datosCrearPelicula)
    }

    async delete(idActor: number):Promise<PeliculaEntity> {
        const sedeEntityAEliminar = this._peliculaRepository
        .create({
            id:idActor
        })
        return await this._peliculaRepository.remove(sedeEntityAEliminar);
    } 

    
    async update(nuevaMascota: PeliculaCreateDto): Promise<PeliculaEntity> {

        const medicamentoEntity = this._peliculaRepository.create(nuevaMascota);
        return this._peliculaRepository.save(medicamentoEntity)
    }
    
}
 