import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { DatabaseModule } from 'src/shared/database.module';
import { clientesProviders } from './clientes.providers';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientesController],
  providers: [ClientesService, AuthService, JwtService, ...clientesProviders],
  exports: [ClientesService],
})
export class ClientesModule {}
