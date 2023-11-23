import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Role } from "../roles/role.entity";
import { User } from "./user.entity";

@Entity("user_role", { schema: "public" })
export class UserRole {
  @ManyToOne(() => Role, (role) => role.userRoles)
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Role;

  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
