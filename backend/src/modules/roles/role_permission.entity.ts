import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Permission } from "../permissions/permission.entity";
import { Role } from "./role.entity";

@Entity("role_permission", { schema: "public" })
export class RolePermission {
  @ManyToOne(() => Permission, (permission) => permission.rolePermissions)
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: Permission;

  @ManyToOne(() => Role, (role) => role.rolePermissions)
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Role;
}
