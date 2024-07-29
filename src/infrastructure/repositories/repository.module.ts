import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { AssetEntity } from '../entity/asset.entity';
import { AssetRepository } from './asset.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([AssetEntity])],
  providers: [AssetRepository],
  exports: [AssetRepository],
})
export class RepositoriesModule {}
