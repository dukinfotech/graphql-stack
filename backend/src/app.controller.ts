import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService
  ) { }

  @Get()
  showEnv(): string {
    const env = this.configService.get<string>('NODE_ENV') || "development";
    return `Running environment: ${env}`
  }
}
