import { Injectable } from '@nestjs/common';
import { IDatabaseConfig } from 'src/domain/config/database.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService implements IDatabaseConfig {
  constructor(private configService: ConfigService) {
    console.log('EnvironmentConfigService constructor');
    console.log('Database Host:', this.configService.get('DATABASE_HOST'));
    console.log('Database Name:', this.configService.get('DATABASE_NAME'));
    console.log('Database User:', this.configService.get('DATABASE_USER'));
    console.log(
      'Database Password:',
      this.configService.get('DATABASE_PASSWORD'),
    );
    console.log('Database Port:', this.configService.get('DATABASE_PORT'));
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabaseSchema(): string {
    return this.configService.get<string>('DATABASE_SCHEMAa');
  }

  getDatabaseSync(): boolean {
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
  }

  getJwtSecret(): string {
    return this.configService.get<string>('jwt.secret   ');
  }
}
