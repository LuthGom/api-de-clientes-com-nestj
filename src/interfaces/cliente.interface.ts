import { HydratedDocument, QueryWithHelpers } from 'mongoose';

export interface Cliente {
  name: string;
  username: number;
  email: string;
  cpf: string;
  endereco: Endereco;
  password: string;
  createdAt: Date;
}

export interface Endereco {
  rua: string;
  numero: number;
  bairro: string;
  cep: number;
  cidade: string;
  uf: string;
}
