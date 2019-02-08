import { Repository } from "typeorm";
import { RolPorUsuarioEntity } from "./rolPorUsuario.entity";
import { RolPorUsuarioInterface } from "./rolPorUsuario.controller";
export declare class RolPorUsuarioService {
    private readonly _rolPorUsuarioService;
    constructor(_rolPorUsuarioService: Repository<RolPorUsuarioEntity>);
    verificarRol(idUsuario: number): Promise<RolPorUsuarioEntity>;
    obtenerRoles(idUsuario: number): Promise<RolPorUsuarioEntity[]>;
    borrar(id: number): Promise<RolPorUsuarioEntity>;
    buscarPorId(idRolPorUsuario: number): Promise<RolPorUsuarioEntity>;
    asignarRol(rolAsignar: RolPorUsuarioInterface): Promise<RolPorUsuarioEntity>;
    verificarRoles(usuarioRol: RolPorUsuarioInterface): Promise<RolPorUsuarioEntity>;
}
