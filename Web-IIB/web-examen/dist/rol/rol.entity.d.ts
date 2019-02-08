import { RolPorUsuarioEntity } from "../rolPorUsuario/rolPorUsuario.entity";
export declare class RolEntity {
    id: number;
    rol_nombre: string;
    rolesPorUsuario: RolPorUsuarioEntity[];
}
