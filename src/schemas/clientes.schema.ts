import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema({
  name: String,
  username: Number,
  email: String,
  cpf: String,
  endereco: Object,
  password: String,
  createdAt: Date
});