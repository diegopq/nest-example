import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup(authDto: AuthDto) {
    console.log(authDto);
    return { message: 'This is a signup route' };
  }

  signin() {
    return { message: 'This is a signin route' };
  }
}
