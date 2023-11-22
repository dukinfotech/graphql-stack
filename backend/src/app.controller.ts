import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';
import { User } from './modules/users/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("users")
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
