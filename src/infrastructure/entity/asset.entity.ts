import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('assets')
export class AssetEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  aircraftType: string;

  @Column()
  registration: string;

  @Column({ type: 'date' })
  manufacturingDate: Date;

  @Column()
  engineType: string;

  @Column()
  serialNumber: string;

  @Column()
  ipcNumber: string;

  @Column()
  maintainanceProgram: string;

  @Column()
  certification: string;

  @Column({ type: 'date' })
  deliveryDate: Date;

  @Column()
  totalFlightHours: number;

  @Column()
  totalFlightCycles: number;

  @Column()
  monthlyFlightHours: number;

  @Column()
  monthlyFlightCycles: number;

  @Column()
  owner: string;

  @Column({ type: 'date' })
  expiryDate: Date;

  @Column()
  camo: string;

  @Column()
  leaseType: string;

  @Column()
  operator: string;

  @Column()
  customer: string;
}
