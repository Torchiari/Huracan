import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { supabase } from '../config/supabase';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

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

    const { data, error } = await supabase.auth.signUp({
      email: dto.email,
      password: dto.password,
    });

    if (error) {
      throw new BadRequestException(error.message);
    }

    const user = await this.usersService.create({
      id: data.user?.id,
      name: dto.name,
      lastname: dto.lastname,
      dni: dto.dni,
      phone: dto.phone,
      email: dto.email,
      role: Role.USER,
    });

    return {
      message: 'Usuario registrado correctamente',
      user,
    };
  }

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log('SUPABASE LOGIN DATA:', data);
    console.log('SUPABASE LOGIN ERROR:', error);

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return {
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: data.user,
    };
  }
}
