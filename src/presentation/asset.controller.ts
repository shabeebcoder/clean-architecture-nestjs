import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetAllAssetsUseCase } from '../application/getAllAssets.usecase';
import { InsertAssetUseCase } from 'src/application/insertAsset.usecase';
import { CreateAssetDto } from './asset.dto';
import { AssetPresenter } from './asset.presenter';

@Controller('asset')
export class AssetController {
  constructor(
    private readonly getAllAssetsUseCase: GetAllAssetsUseCase,
    private readonly insertAssetUseCase: InsertAssetUseCase,
  ) {}
  @Get()
  async getAllassets() {
    console.log('controller===>', this.getAllAssetsUseCase.execute());
    const assets = await this.getAllAssetsUseCase.execute();
    return assets.map((asset) => new AssetPresenter(asset));
  }

  @Post()
  async insertAsset(@Body() asset: CreateAssetDto) {
    const insertedAsset = await this.insertAssetUseCase.execute(asset);
    return new AssetPresenter(insertedAsset);
  }
}
