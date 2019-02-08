import { RolService } from "./rol.service";
export declare class RolController {
    private readonly _rolService;
    constructor(_rolService: RolService);
    crearRol(response: any): void;
    crearRolPost(response: any, rolCrear: any): Promise<void>;
    asignarRol(response: any): Promise<void>;
}
export interface Rol {
    id: number;
    rol_nombre: string;
}
