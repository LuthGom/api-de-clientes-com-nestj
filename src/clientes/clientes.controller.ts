import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { AuthService } from 'src/auth/auth.service';
import { ClienteResponseDto } from './dto/cliente-response.dto';
@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly clientesService: ClientesService,
    public authService: AuthService,
  ) {}

  @Post()
  create(
    @Body() createClienteDto: CreateClienteDto,
  ): Promise<ClienteResponseDto> {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  async findAll(): Promise<ClienteResponseDto[]> {
    return this.clientesService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user._doc);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.clientesService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(id);
  }
}
