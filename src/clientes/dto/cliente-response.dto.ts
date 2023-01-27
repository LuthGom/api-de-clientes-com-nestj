import { Exclude } from 'class-transformer';
import { CreateClienteDto } from './create-cliente.dto';
export class ClienteResponseDto {
  name: string;
  cpf: string;
  email: string;
  username: string;
  password: string;
  endereco: object;
  createdAt: Date;

  @Exclude()
  _id: string;

  @Exclude()
  __v: string;

  constructor(partial: Partial<CreateClienteDto>) {
    Object.assign(this, partial);
  }
}
