
export interface Cliente extends Document{
  name: {type: string, required: boolean};
  username: {type: string, required: boolean};
  email: {type: string, required: boolean};
  cpf: {type: string, required: boolean};
  endereco: {type: object, required: boolean};
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
