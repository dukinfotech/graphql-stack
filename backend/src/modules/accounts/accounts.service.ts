import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) { }

  async findByEmail(email: string): Promise<Account> {
    const account = await this.accountsRepository.findOne({
      where: { email },
      relations: ['user']
    })
    return account;
  }

  async updateJwtTokens(userId: number, hashedAccessToken: string, hashedRefreshAccessToken: string) {
    await this.accountsRepository.update({
      userId
    }, {
      hashedAccessToken,
      hashedRefreshAccessToken
    })
  }
}