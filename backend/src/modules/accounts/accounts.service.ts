import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  async validateAccessToken(
    email: string,
    accessToken: string,
  ): Promise<boolean> {
    const account = await this.accountsRepository.findOneBy({ email });
    const isMatch = await bcrypt.compare(
      accessToken,
      account.hashedAccessToken,
    );
    return isMatch;
  }

  async validateRefreshAccessToken(
    email: string,
    refreshAccessToken: string,
  ): Promise<boolean> {
    const account = await this.accountsRepository.findOneBy({ email });
    const isMatch = await bcrypt.compare(
      refreshAccessToken,
      account.hashedRefreshAccessToken,
    );
    return isMatch;
  }

  async updateJwtTokens(
    userId: number,
    hashedAccessToken: string,
    hashedRefreshAccessToken: string,
  ) {
    await this.accountsRepository.update(
      {
        userId,
      },
      {
        hashedAccessToken,
        hashedRefreshAccessToken,
      },
    );
  }

  async findByEmail(email: string): Promise<Account> {
    const account = await this.accountsRepository.findOne({
      where: { email },
      relations: ['user'],
    });
    return account;
  }

  async findByUserId(userId: number): Promise<Account> {
    const account = await this.accountsRepository.findOne({
      where: { userId },
    });
    return account;
  }

  async updateLoginHistory(account: Account, userAgent: string): Promise<void> {
    account.lastLoginAt = new Date();
    account.lastUserAgent = userAgent;
    this.accountsRepository.save(account);
  }
}
