import { IsString } from 'class-validator';
export class CreateCarDto {
    
    @IsString()
    readonly brand: string;
    @IsString({message: 'el modelo debe ser una cadena de texto'})
    readonly model: string;

}