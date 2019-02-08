import { RolEntity } from "./rol.entity";
import { Repository } from "typeorm";
import { RolDto } from "./rol-create-dto/rol-create.dto";
export declare class RolService {
    private readonly _rolService;
    constructor(_rolService: Repository<RolEntity>);
    crearRol(rol: RolDto): Promise<RolEntity>;
    obtenerRol(): Promise<RolEntity[]>;
}
