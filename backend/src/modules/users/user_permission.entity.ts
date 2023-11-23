import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Permission } from "../permissions/permission.entity";
import { User } from "./user.entity";

@Entity("user_permission", { schema: "public" })
export class UserPermission {
  @ManyToOne(() => Permission, (permission) => permission.userPermissions)
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: Permission;

  @ManyToOne(() => User, (user) => user.userPermissions)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
