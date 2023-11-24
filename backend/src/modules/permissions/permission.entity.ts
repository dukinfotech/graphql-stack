import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('permissions_pkey', ['id'], { unique: true })
@Index('permissions_value_key', ['value'], { unique: true })
@Entity('permissions', { schema: 'public' })
export class Permission {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', length: 20 })
  name: string;

  @Column('character varying', { name: 'value', unique: true, length: 20 })
  value: string;

  @Column('timestamp with time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'now()',
  })
  createdAt: Date | null;
}
