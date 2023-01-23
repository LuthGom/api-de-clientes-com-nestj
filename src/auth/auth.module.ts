import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientesModule } from 'src/clientes/clientes.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
@Module({
  imports: [ClientesModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
