import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagosModule } from './pagos/pagos.module';

@Module({
  imports: [PedidosModule, PagosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
