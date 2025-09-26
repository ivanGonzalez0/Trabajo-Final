import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PedidosService {

  constructor(
  @InjectRepository(Pedido)
  private readonly pedidoRepository:Repository<Pedido>
){}

  async create(creatPedidoDto:CreatePedidoDto):Promise<Pedido> {
    try{
      const nuevoPedido = this.pedidoRepository.create(creatPedidoDto);
      return await this.pedidoRepository.save(nuevoPedido)
    } catch(error){
      console.error('Error al crear Pedido',error)
      throw new InternalServerErrorException('Error al crear Pedido')
    }
  }

  async findAll():Promise <Pedido[]> {
    return await this.pedidoRepository.find();
  }

  async findOne(id: number):Promise <Pedido | null> {
    const pedido= await this.pedidoRepository.findOneBy({id})
    if(!pedido){
      throw new NotFoundException('Pedido no encontrado')
    }
    return pedido;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  async remove(id: number) {
    const pedido = await this.pedidoRepository.findOne({where:{id}})
    if(!pedido){
      throw new NotFoundException('Pedido no encontrado')
    }
   await this.pedidoRepository.remove(pedido)
  }
}
