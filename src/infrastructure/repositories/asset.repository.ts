import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetModel } from 'src/domain/model/assets';
import { IAssetRepository } from 'src/domain/repositories/asset.repository';
import { Repository } from 'typeorm';
import { AssetEntity } from '../entity/asset.entity';

@Injectable()
export class AssetRepository implements IAssetRepository {
  constructor(
    @InjectRepository(AssetEntity)
    private readonly assetRepository: Repository<AssetEntity>,
  ) {}
  async getAll(): Promise<AssetModel[]> {
    const assets = await this.assetRepository.find();
    return assets.map((asset) => asset);
  }
  async insert(asset: AssetModel): Promise<AssetModel> {
    const newAsset = new AssetEntity();
    console.log('asset===>', newAsset);
    await this.assetRepository.insert(asset);
    return asset;
  }
}
