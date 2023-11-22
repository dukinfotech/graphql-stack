import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../roles/role.entity";
import { Permission } from "../permissions/permission.entity";

@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "first_name", length: 50 })
  firstName: string;

  @Column("character varying", { name: "last_name", length: 50 })
  lastName: string;

  @Column("date", { name: "birthday" })
  birthday: string;

  @Column("character varying", { name: "phone", nullable: true, length: 15 })
  phone: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 15 })
  country: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 15 })
  city: string | null;

  @Column("character varying", { name: "district", nullable: true, length: 15 })
  district: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("timestamp with time zone", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp with time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[]

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[]
}
