import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: CreateUserDto) {
    const emailExists = await this.usersService.findByEmail(dto.email);

    if (emailExists) {
      throw new BadRequestException('El email ya está registrado');
    }

    const dniExists = await this.usersService.findByDni(dto.dni);

    if (dniExists) {
      throw new BadRequestException('El DNI ya está registrado');
    }

    const phoneExists = await this.usersService.findByPhone(dto.phone);

    if (phoneExists) {
      throw new BadRequestException('El celular ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.usersService.create({
      ...dto,
      password: hashedPassword,
    });

    const { password: _, ...result } = user;
    return result;
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
      lastname: user.lastname,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
