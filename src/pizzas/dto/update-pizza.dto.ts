import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaDto } from 'pizzas/dto/create-pizza.dto';

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {}
