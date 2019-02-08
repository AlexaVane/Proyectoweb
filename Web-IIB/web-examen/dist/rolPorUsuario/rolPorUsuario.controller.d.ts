import { UsuarioService } from "src/usuario/usuario.service";
import { RolEntity } from "src/rol/rol.entity";
import { RolService } from "src/rol/rol.service";
import { RolPorUsuarioService } from "./rolPorUsuario.service";
import { UsuarioEntity } from "../usuario/usuario.entity";
export declare class RolPorUsuarioController {
    private readonly _rolPorUsuarioService;
    private readonly _usuarioService;
    private readonly _rolService;
    constructor(_rolPorUsuarioService: RolPorUsuarioService, _usuarioService: UsuarioService, _rolService: RolService);
    mostrarAsignarRol(response: any, idUsuario: any, verificacion: any, rol: any, sesion: any): Promise<void>;
    asginarRol(rol: RolPorUsuarioInterface, response: any, idUsuario: any, sesion: any): Promise<void>;
    borrar(idRolUsuario: any, response: any): Promise<void>;
}
export interface RolPorUsuarioInterface {
    id?: number;
    rol: RolEntity;
    usuario: UsuarioEntity;
}
