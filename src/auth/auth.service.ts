import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { ClientesService } from 'src/clientes/clientes.service';
@Injectable()
export class AuthService {
  constructor(private clientesService: ClientesService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.clientesService.findOne(username);

    const senha = user[0].password;

    if (user && compare(pass, senha)) {
      const { password, ...result } = user[0];
      return result;
    }
    return null;
  }
}
