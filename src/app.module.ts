import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), ClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
