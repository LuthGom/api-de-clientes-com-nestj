import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    cpf: String,
    endereco: Object,
    password: String,
    createdAt: Date,
  },
  {
    query: {
      byUsername(username: string) {
        return this.find({ username });
      },
    },
  },
);
