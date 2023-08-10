import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { message: 'This is a signup route' };
  }

  signin() {
    return { message: 'This is a signin route' };
  }
}
