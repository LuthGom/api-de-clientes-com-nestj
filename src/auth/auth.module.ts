import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { ClientesModule } from 'src/clientes/clientes.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    ClientesModule,
    PassportModule,
    JwtModule.register({
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
