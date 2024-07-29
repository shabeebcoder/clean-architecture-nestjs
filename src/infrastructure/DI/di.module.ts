import { Module } from '@nestjs/common';
import { AssetController } from './../../presentation/asset.controller';
import { GetAllAssetsUseCase } from 'src/application/getAllAssets.usecase';
import { AssetRepository } from '../repositories/asset.repository';
import { RepositoriesModule } from '../repositories/repository.module';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { InsertAssetUseCase } from 'src/application/insertAsset.usecase';

@Module({
  imports: [RepositoriesModule, EnvironmentConfigModule],
  controllers: [AssetController],
  providers: [
    {
      provide: GetAllAssetsUseCase,
      useFactory: (assetRepository: AssetRepository) =>
        new GetAllAssetsUseCase(assetRepository),
      inject: [AssetRepository],
    },
    {
      provide: InsertAssetUseCase,
      useFactory: (assetRepository: AssetRepository) =>
        new InsertAssetUseCase(assetRepository),
      inject: [AssetRepository],
    },
  ],
  exports: [GetAllAssetsUseCase, InsertAssetUseCase],
})
export class DIModule {}
