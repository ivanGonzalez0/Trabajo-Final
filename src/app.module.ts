import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagosModule } from './pagos/pagos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes/entities/cliente.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql', // o postgres, sqlite, etc.
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Juan1215',
      database: 'pizzaconmigo',
      autoLoadEntities:true,
      synchronize: true,}),
PedidosModule, PagosModule,ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
