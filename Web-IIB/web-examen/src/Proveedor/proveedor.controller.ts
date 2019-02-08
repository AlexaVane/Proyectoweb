import {Controller} from "@nestjs/common";
import {TelasService} from "../actor/telas.service";
import {ProductoService} from "../pelicula/producto.service";


@Controller('proveedor')

export class ProveedorController {

    constructor(
        private readonly _actorService: TelasService,
        private _telasService: ProductoService
    ) { }

}