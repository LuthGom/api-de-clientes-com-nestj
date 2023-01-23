import * as mongoose from 'mongoose';
import { Cliente } from 'src/interfaces/cliente.interface';

mongoose.Promise;
const ClienteSchema = new mongoose.Schema<Cliente>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  endereco: { type: Object, required: true },
  password: { type: String, required: true },
  createdAt: Date,
});
ClienteSchema.pre<Cliente>('save', function (next) {

  next();
});

export default ClienteSchema;
