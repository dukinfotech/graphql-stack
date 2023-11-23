import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserPermission } from "./user_permission.entity";
import { UserRole } from "./user_role.entity";
import { Account } from "../accounts/account.entity";

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

  @OneToOne(() => Account, (account) => account.user)
  account: Account;

  @OneToMany(() => UserPermission, (userPermission) => userPermission.user)
  userPermissions: UserPermission[];

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];
}
