import { ApiProperty } from '@nestjs/swagger';
import { AssetModel } from '../domain/model/assets';

export class AssetPresenter {
  @ApiProperty({
    example: '123',
    description: 'Unique identifier of the asset',
  })
  id: string;

  @ApiProperty({ example: 'aircraft', description: 'Type of the asset' })
  type: string;

  @ApiProperty({ example: 'A320', description: 'Type of the aircraft' })
  assetType: string;

  @ApiProperty({ example: 'G-EZUS', description: 'Aircraft registration' })
  registration: string;

  @ApiProperty({
    example: '2018-01-01',
    description: 'Manufacturing date of the aircraft',
  })
  manufacturingDate: Date;

  @ApiProperty({ example: 'CFM56-5B4/P', description: 'Type of the engine' })
  engineType: string;

  @ApiProperty({
    example: '12345',
    description: 'Serial number of the aircraft',
  })
  serialNumber: string;

  @ApiProperty({ example: '12345', description: 'IPC number of the aircraft' })
  ipcNumber: string;

  @ApiProperty({
    example: 'C-Check',
    description: 'Maintenance program of the aircraft',
  })
  maintainanceProgram: string;

  @ApiProperty({
    example: 'EASA',
    description: 'Certification of the aircraft',
  })
  certification: string;

  @ApiProperty({
    example: '2018-01-01',
    description: 'Delivery date of the aircraft',
  })
  deliveryDate: Date;

  @ApiProperty({
    example: 12345,
    description: 'Total flight hours of the aircraft',
  })
  totalFlightHours: number;

  @ApiProperty({
    example: 12345,
    description: 'Total flight cycles of the aircraft',
  })
  totalFlightCycles: number;

  @ApiProperty({
    example: 12345,
    description: 'Monthly flight hours of the aircraft',
  })
  monthlyFlightHours: number;

  @ApiProperty({
    example: 12345,
    description: 'Monthly flight cycles of the aircraft',
  })
  monthlyFlightCycles: number;

  @ApiProperty({ example: 'easyJet', description: 'Owner of the aircraft' })
  owner: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'Expiry date of the aircraft',
  })
  expiryDate: Date;

  @ApiProperty({ example: 'easyJet', description: 'CAMO of the aircraft' })
  camo: string;

  @ApiProperty({
    example: 'Dry Lease',
    description: 'Lease type of the aircraft',
  })
  leaseType: string;

  @ApiProperty({ example: 'easyJet', description: 'Operator of the aircraft' })
  operator: string;

  @ApiProperty({ example: 'easyJet', description: 'Customer of the aircraft' })
  customer: string;

  constructor(asset: AssetModel) {
    this.type = asset.type;
    this.assetType = asset.aircraftType;
    this.registration = asset.registration;
    this.manufacturingDate = asset.manufacturingDate;
    this.engineType = asset.engineType;
    this.serialNumber = asset.serialNumber;
    this.ipcNumber = asset.ipcNumber;
    this.maintainanceProgram = asset.maintainanceProgram;
    this.certification = asset.certification;
    this.deliveryDate = asset.deliveryDate;
    this.totalFlightHours = asset.totalFlightHours;
    this.totalFlightCycles = asset.totalFlightCycles;
    this.monthlyFlightHours = asset.monthlyFlightHours;
    this.monthlyFlightCycles = asset.monthlyFlightCycles;
    this.owner = asset.owner;
    this.expiryDate = asset.expiryDate;
    this.camo = asset.camo;
    this.leaseType = asset.leaseType;
    this.operator = asset.operator;
    this.customer = asset.customer;
  }
}
