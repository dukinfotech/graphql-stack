import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../users/user.entity";

@Index("accounts_email_key", ["email"], { unique: true })
@Index("accounts_pkey", ["id"], { unique: true })
@Index("accounts_user_id_key", ["userId"], { unique: true })
@Index("accounts_username_key", ["username"], { unique: true })
@Entity("accounts", { schema: "public" })
export class Account {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id", unique: true })
  userId: number;

  @Column("boolean", { name: "is_active", default: () => "false" })
  isActive: boolean;

  @Column("character varying", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("character varying", { name: "username", unique: true, length: 20 })
  username: string;

  @Column("character varying", { name: "bio", nullable: true, length: 50 })
  bio: string | null;

  @Column("character varying", {
    name: "hashed_password",
    nullable: true,
    length: 255,
  })
  hashedPassword: string | null;

  @Column("character varying", {
    name: "hashed_access_token",
    nullable: true,
    length: 255,
  })
  hashedAccessToken: string | null;

  @Column("character varying", {
    name: "hashed_refresh_access_token",
    nullable: true,
    length: 255,
  })
  hashedRefreshAccessToken: string | null;

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

  @OneToOne(() => User, (user) => user.account)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
