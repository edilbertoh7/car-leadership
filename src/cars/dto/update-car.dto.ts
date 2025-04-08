import { IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string
    
    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString({message: 'el modelo debe ser una cadena de texto'})
    @IsOptional()
    readonly model?: string;

}