import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserPermission } from "../users/user_permission.entity.js";
import { RolePermission } from "../roles/role_permission.entity.js";

@Index("permissions_pkey", ["id"], { unique: true })
@Index("permissions_value_key", ["value"], { unique: true })
@Entity("permissions", { schema: "public" })
export class Permission {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 20 })
  name: string;

  @Column("character varying", { name: "value", unique: true, length: 20 })
  value: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @OneToMany(
    () => RolePermission,
    (rolePermission) => rolePermission.permission
  )
  rolePermissions: RolePermission[];

  @OneToMany(
    () => UserPermission,
    (userPermission) => userPermission.permission
  )
  userPermissions: UserPermission[];
}
