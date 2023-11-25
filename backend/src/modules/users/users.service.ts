import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      relations: ['account'],
      where: {
        account: {
          email
        }
      }
    });
    return user;
  }
}