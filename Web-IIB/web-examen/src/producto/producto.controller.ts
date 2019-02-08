import {Controller} from "@nestjs/common";
import {TelasService} from "../actor/telas.service";
import {ProductoService} from "../pelicula/producto.service";

@Controller('producto')

export class ProductoController {

    constructor(
        private readonly _actorService: TelasService,
        private _telasService: ProductoService
    ) { }

}