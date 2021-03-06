import {IsBooleanString, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class EventoCreateDto {

    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    nombres: string;

    @IsNotEmpty()
    @IsString()
    apellidos: string;

        @IsNotEmpty()
       @IsDateString()
        fechaNacimiento: string;

       @IsNotEmpty()
       @IsNumber()
       numeroPeliculas: number;

       @IsNotEmpty()
       @IsBooleanString()
       retirado: boolean;

}