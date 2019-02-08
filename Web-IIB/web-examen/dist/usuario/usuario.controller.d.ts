import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly _usuarioService;
    constructor(_usuarioService: UsuarioService);
    crearUsuario(response: any, mensaje: string): void;
    crearUsuarioPost(response: any, usuarioCrear: any): Promise<void>;
    mostrarUsuario(res: any, sesion: any, accion: string, nombre: string, busqueda: string): Promise<void>;
    borrar(idUsuario: string, response: any): Promise<void>;
}
