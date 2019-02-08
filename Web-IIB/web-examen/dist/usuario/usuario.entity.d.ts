import { RolPorUsuarioEntity } from '../rolPorUsuario/rolPorUsuario.entity';
export declare class UsuarioEntity {
    id: number;
    nombre_usuario: string;
    email_usuario: string;
    password_usuario: string;
    fecha_nacimiento_usuario: string;
    rolesPorUsuario: RolPorUsuarioEntity[];
}
