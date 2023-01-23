import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { DatabaseModule } from 'src/shared/database.module';
import { clientesProviders } from './clientes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientesController],
  providers: [ClientesService, ...clientesProviders],
  exports: [ClientesService],
})
export class ClientesModule {}
