import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from 'pizzas/dto/create-pizza.dto';
import { UpdatePizzaDto } from 'pizzas/dto/update-pizza.dto';

@Injectable()
export class PizzasService {
  create(createPizzaDto: CreatePizzaDto) {
    return 'This action adds a new pizza';
  }

  findAll() {
    return `This action returns all pizzas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
