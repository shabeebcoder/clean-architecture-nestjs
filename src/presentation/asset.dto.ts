import { IsString, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssetDto {
  @ApiProperty({ example: 'aircraft', description: 'Type of the asset' })
  @IsString()
  type: string;

  @ApiProperty({ example: 'A320', description: 'Type of the aircraft' })
  @IsString()
  aircraftType: string;

  @ApiProperty({ example: 'G-EZUS', description: 'Aircraft registration' })
  @IsString()
  registration: string;

  @ApiProperty({
    example: '2018-01-01',
    description: 'Manufacturing date of the aircraft',
  })
  @IsDate()
  @Type(() => Date)
  manufacturingDate: Date;

  @ApiProperty({ example: 'CFM56-5B4/P', description: 'Type of the engine' })
  @IsString()
  engineType: string;

  @ApiProperty({
    example: '12345',
    description: 'Serial number of the aircraft',
  })
  @IsString()
  serialNumber: string;

  @ApiProperty({ example: '12345', description: 'IPC number of the aircraft' })
  @IsString()
  ipcNumber: string;

  @ApiProperty({
    example: 'C-Check',
    description: 'Maintenance program of the aircraft',
  })
  @IsString()
  maintainanceProgram: string;

  @ApiProperty({
    example: 'EASA',
    description: 'Certification of the aircraft',
  })
  @IsString()
  certification: string;

  @ApiProperty({
    example: '2018-01-01',
    description: 'Delivery date of the aircraft',
  })
  @IsDate()
  @Type(() => Date)
  deliveryDate: Date;

  @ApiProperty({
    example: 12345,
    description: 'Total flight hours of the aircraft',
  })
  @IsNumber()
  totalFlightHours: number;

  @ApiProperty({
    example: 12345,
    description: 'Total flight cycles of the aircraft',
  })
  @IsNumber()
  totalFlightCycles: number;

  @ApiProperty({
    example: 12345,
    description: 'Monthly flight hours of the aircraft',
  })
  @IsNumber()
  monthlyFlightHours: number;

  @ApiProperty({
    example: 12345,
    description: 'Monthly flight cycles of the aircraft',
  })
  @IsNumber()
  monthlyFlightCycles: number;

  @ApiProperty({ example: 'easyJet', description: 'Owner of the aircraft' })
  @IsString()
  owner: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'Expiry date of the aircraft',
  })
  @IsDate()
  @Type(() => Date)
  expiryDate: Date;

  @ApiProperty({ example: 'easyJet', description: 'CAMO of the aircraft' })
  @IsString()
  camo: string;

  @ApiProperty({
    example: 'Dry Lease',
    description: 'Lease type of the aircraft',
  })
  @IsString()
  leaseType: string;

  @ApiProperty({ example: 'easyJet', description: 'Operator of the aircraft' })
  @IsString()
  operator: string;

  @ApiProperty({ example: 'easyJet', description: 'Customer of the aircraft' })
  @IsString()
  customer: string;
}
