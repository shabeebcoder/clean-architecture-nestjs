import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { DIModule } from 'src/infrastructure/DI/di.module';

@Module({
  controllers: [AssetController],
  imports: [DIModule],
})
export class ControllerModule {}
