import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cliente } from 'src/interfaces/cliente.interface';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @Inject('CLIENTE_MODEL')
    private clienteModel: Model<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = new this.clienteModel(createClienteDto);
    return cliente.save();
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteModel.find().exec();
  }

  findOne(id: string) {
    return this.clienteModel.findById(id);
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return this.clienteModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateClienteDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.clienteModel.findByIdAndDelete(id);
  }
}
