import { UsuarioEntity } from './usuario.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { UsuarioDto } from './usuario-create-dto/usuario-create.dto';
export declare class UsuarioService {
    private readonly _usuarioService;
    constructor(_usuarioService: Repository<UsuarioEntity>);
    credenciales(usuario: UsuarioDto): Promise<UsuarioEntity>;
    crearUsuario(nuevoUsuario: UsuarioDto): Promise<UsuarioEntity>;
    buscar(parametros?: FindManyOptions<UsuarioEntity>): Promise<UsuarioEntity[]>;
    borrar(id: number): Promise<UsuarioEntity>;
    buscarPorId(id: number): Promise<UsuarioEntity>;
}
