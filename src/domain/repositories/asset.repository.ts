import { AssetModel } from '../model/assets';

export interface IAssetRepository {
  getAll(): Promise<AssetModel[]>;
  insert(asset: AssetModel): Promise<AssetModel>;
}

export const IAssetRepository = Symbol('IAssetRepository');
