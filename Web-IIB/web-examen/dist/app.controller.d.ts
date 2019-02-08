import { AppService } from './app.service';
import { UsuarioService } from './usuario/usuario.service';
import { RolPorUsuarioService } from './rolPorUsuario/rolPorUsuario.service';
export declare class AppController {
    private readonly appService;
    private readonly _usuarioService;
    private readonly _rolPorUsuarioService;
    constructor(appService: AppService, _usuarioService: UsuarioService, _rolPorUsuarioService: RolPorUsuarioService);
    credenciales(response: any, mensaje: string): void;
    metodoCrendenciales(response: any, session: any, username_email: any, password: any): Promise<void>;
    logout(res: any, sesion: any): Promise<void>;
}
