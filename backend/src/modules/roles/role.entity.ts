import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserRole } from "../users/user_role.entity.js";
import { RolePermission } from "./role_permission.entity.js";

@Index("roles_pkey", ["id"], { unique: true })
@Entity("roles", { schema: "public" })
export class Role {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 20 })
  name: string;

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

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  rolePermissions: RolePermission[];

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];
}
