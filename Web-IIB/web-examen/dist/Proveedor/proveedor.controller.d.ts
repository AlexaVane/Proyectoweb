import { TelasService } from "../actor/telas.service";
import { ProductoService } from "../pelicula/producto.service";
export declare class ProveedorController {
    private readonly _actorService;
    private _telasService;
    constructor(_actorService: TelasService, _telasService: ProductoService);
}
