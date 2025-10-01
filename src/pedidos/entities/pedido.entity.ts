import { Cliente } from "src/clientes/entities/cliente.entity";
import { Pago } from "src/pagos/entities/pago.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,OneToOne } from "typeorm";


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
    
    @Column('timestamp')
    fecha:Date

    @ManyToOne(()=> Cliente,(cliente)=>cliente.pedido)
   
    @JoinColumn()
    cliente:Cliente;

    @OneToOne(()=>Pago,(pago)=>pago.pedido)

    @JoinColumn()
    pago:Pago;
    }
