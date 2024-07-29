import { AssetModel } from 'src/domain/model/assets';
import { IAssetRepository } from 'src/domain/repositories/asset.repository';

export class InsertAssetUseCase {
  constructor(private readonly assetRepository: IAssetRepository) {}
  async execute(asset: AssetModel): Promise<AssetModel> {
    return await this.assetRepository.insert(asset);
  }
}
