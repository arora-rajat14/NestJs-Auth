import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  {
    id: '1',
    username: 'Rajat',
    password: 'password',
  },
  {
    id: '2',
    username: 'Arindam',
    password: 'password12',
  },
  {
    id: '3',
    username: 'Aman',
    password: 'password123',
  },
  {
    id: '4',
    username: 'Prashant',
    password: 'password1234',
  },
];
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) return null;

    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
    return null;
  }
}
