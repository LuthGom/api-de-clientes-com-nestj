import * as mongoose from 'mongoose';
import { Cliente } from 'src/interfaces/cliente.interface';
import { hash } from 'bcrypt';
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
ClienteSchema.pre<Cliente>('save', async function (next) {
  this.password = await hash(this.password, 10);
  next();
});

export default ClienteSchema;
