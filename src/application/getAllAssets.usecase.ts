import { AssetModel } from 'src/domain/model/assets';
import { IAssetRepository } from 'src/domain/repositories/asset.repository';

export class GetAllAssetsUseCase {
  constructor(private readonly assetRepository: IAssetRepository) {}
  execute(): Promise<AssetModel[]> {
    return this.assetRepository.getAll();
  }
}
