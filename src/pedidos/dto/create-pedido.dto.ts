import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePedidoDto {
    @IsNotEmpty()
    @IsNumber()
    monto:number;

    @IsNotEmpty()
    @IsString()
    direccion_pedido:string;

    @IsNotEmpty()
    @IsNumber()
    cantidad:number

    @IsNumber()
    fecha_pedido:number

    

}
