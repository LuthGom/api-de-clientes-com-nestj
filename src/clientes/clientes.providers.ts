import { Connection } from 'mongoose';
import { Cliente } from 'src/interfaces/cliente.interface';
import ClienteSchema from 'src/schemas/clientes.schema';
export const clientesProviders = [
  {
    provide: 'CLIENTE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model<Cliente>('Cliente', ClienteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  
];
