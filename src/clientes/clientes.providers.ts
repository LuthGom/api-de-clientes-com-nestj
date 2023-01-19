import { Connection } from 'mongoose';
import { ClienteSchema } from 'src/schemas/clientes.schema';
export const clientesProviders = [
  {
    provide: 'CLIENTE_MODEL',
    useFactory: (connection: Connection) => connection.model('Cliente', ClienteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];