import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [ConfigModule.forRoot(), ClientesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
