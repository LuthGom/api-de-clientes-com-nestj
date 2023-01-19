import { Document } from 'mongoose';

export class CreateClienteDto extends Document {
  readonly name: String;
  readonly username: Number;
  readonly email: String;
  readonly cpf: String;
  readonly endereco: Object;
  readonly password: String;
  readonly createdAt: Date;
}
