import { AssetModel } from '../model/assets';

export interface IAssetService {
  getAll(): AssetModel[];
}
export const IAssetService = Symbol('IAssetService');
