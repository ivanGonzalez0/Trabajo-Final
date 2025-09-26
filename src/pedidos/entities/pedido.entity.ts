import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id:number

    //preguntar si aca va la FK de Cliente
    @Column()
    monto:number;
    
    @Column()
    direccion_envio:string;
    
    @Column()
    cantidad:number;
    
    @Column()
    fecha:number
}
