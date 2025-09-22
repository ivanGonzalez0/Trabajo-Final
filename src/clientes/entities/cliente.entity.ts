import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"
@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre_usuario:string;
    
    @Column ()
    contraseña:string
    
    @Column()
    email: string;
}
