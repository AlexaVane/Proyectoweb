import { RolEntity } from "../rol/rol.entity";
import { UsuarioEntity } from "../usuario/usuario.entity";
export declare class RolPorUsuarioEntity {
    id: number;
    rol: RolEntity;
    usuario: UsuarioEntity;
}
