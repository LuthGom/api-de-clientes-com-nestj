import { Injectable } from '@nestjs/common';
import { ClientesService } from 'src/clientes/clientes.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private clientesService: ClientesService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.clientesService.findOne(username);

    const senha = user[0].password;

    if (user && senha === pass) {
      const { password, ...result } = user[0];
      return result;
    }
    return null;
  }
   async login(user: any) {
    const payload = { username: user.username, sub: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      
      
    };
  }
}
