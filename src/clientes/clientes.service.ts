import { Injectable, Inject, Param } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cliente } from 'src/interfaces/cliente.interface';
import { ClienteResponseDto } from './dto/cliente-response.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @Inject('CLIENTE_MODEL')
    private clienteModel: Model<ClienteResponseDto>,
  ) {}

  async create(
    createClienteDto: CreateClienteDto,
  ): Promise<ClienteResponseDto> {
    const cliente = new this.clienteModel(createClienteDto);
    cliente.save();
    return new ClienteResponseDto(createClienteDto);
  }

  async findAll(): Promise<ClienteResponseDto[]> {
    return await this.clienteModel.find();
  }

  async findOne(username: string) {
    const cliente = await this.clienteModel
      .find()
      .where('username')
      .equals(username);

    return cliente;
  }
  async findById(id: string) {
    return await this.clienteModel.findById({ _id: id });
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
