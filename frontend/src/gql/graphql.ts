/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type GetSelfOutput = {
  __typename?: 'GetSelfOutput';
  address: Scalars['String']['output'];
  birthday: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  district: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  birthday: Scalars['String']['output'];
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  district?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastName: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  refreshAccessToken: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput';
  accessToken: Scalars['String']['output'];
  refreshAccessToken: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  bio?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  hashed_access_token?: Maybe<Scalars['String']['output']>;
  hashed_password?: Maybe<Scalars['String']['output']>;
  hashed_refresh_access_token?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_active: Scalars['Boolean']['output'];
  last_login_at?: Maybe<Scalars['timestamptz']['output']>;
  last_user_agent?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  hashed_access_token?: InputMaybe<String_Comparison_Exp>;
  hashed_password?: InputMaybe<String_Comparison_Exp>;
  hashed_refresh_access_token?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_login_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_user_agent?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "email" */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint on columns "user_id" */
  AccountsUserIdKey = 'accounts_user_id_key',
  /** unique or primary key constraint on columns "username" */
  AccountsUsernameKey = 'accounts_username_key'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hashed_access_token?: InputMaybe<Scalars['String']['input']>;
  hashed_password?: InputMaybe<Scalars['String']['input']>;
  hashed_refresh_access_token?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login_at?: InputMaybe<Scalars['timestamptz']['input']>;
  last_user_agent?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  bio?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  hashed_access_token?: Maybe<Scalars['String']['output']>;
  hashed_password?: Maybe<Scalars['String']['output']>;
  hashed_refresh_access_token?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_login_at?: Maybe<Scalars['timestamptz']['output']>;
  last_user_agent?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  bio?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  hashed_access_token?: Maybe<Scalars['String']['output']>;
  hashed_password?: Maybe<Scalars['String']['output']>;
  hashed_refresh_access_token?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_login_at?: Maybe<Scalars['timestamptz']['output']>;
  last_user_agent?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  bio?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  hashed_access_token?: InputMaybe<Order_By>;
  hashed_password?: InputMaybe<Order_By>;
  hashed_refresh_access_token?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  last_login_at?: InputMaybe<Order_By>;
  last_user_agent?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  HashedAccessToken = 'hashed_access_token',
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  HashedRefreshAccessToken = 'hashed_refresh_access_token',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  LastUserAgent = 'last_user_agent',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hashed_access_token?: InputMaybe<Scalars['String']['input']>;
  hashed_password?: InputMaybe<Scalars['String']['input']>;
  hashed_refresh_access_token?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login_at?: InputMaybe<Scalars['timestamptz']['input']>;
  last_user_agent?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hashed_access_token?: InputMaybe<Scalars['String']['input']>;
  hashed_password?: InputMaybe<Scalars['String']['input']>;
  hashed_refresh_access_token?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login_at?: InputMaybe<Scalars['timestamptz']['input']>;
  last_user_agent?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  HashedAccessToken = 'hashed_access_token',
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  HashedRefreshAccessToken = 'hashed_refresh_access_token',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  LastUserAgent = 'last_user_agent',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "permissions" */
  delete_permissions?: Maybe<Permissions_Mutation_Response>;
  /** delete single row from the table: "permissions" */
  delete_permissions_by_pk?: Maybe<Permissions>;
  /** delete data from the table: "role_permission" */
  delete_role_permission?: Maybe<Role_Permission_Mutation_Response>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "user_permission" */
  delete_user_permission?: Maybe<User_Permission_Mutation_Response>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "permissions" */
  insert_permissions?: Maybe<Permissions_Mutation_Response>;
  /** insert a single row into the table: "permissions" */
  insert_permissions_one?: Maybe<Permissions>;
  /** insert data into the table: "role_permission" */
  insert_role_permission?: Maybe<Role_Permission_Mutation_Response>;
  /** insert a single row into the table: "role_permission" */
  insert_role_permission_one?: Maybe<Role_Permission>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "user_permission" */
  insert_user_permission?: Maybe<User_Permission_Mutation_Response>;
  /** insert a single row into the table: "user_permission" */
  insert_user_permission_one?: Maybe<User_Permission>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  login: LoginOutput;
  logout: Scalars['Boolean']['output'];
  refreshTokens: RefreshTokenOutput;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "permissions" */
  update_permissions?: Maybe<Permissions_Mutation_Response>;
  /** update single row of the table: "permissions" */
  update_permissions_by_pk?: Maybe<Permissions>;
  /** update multiples rows of table: "permissions" */
  update_permissions_many?: Maybe<Array<Maybe<Permissions_Mutation_Response>>>;
  /** update data of the table: "role_permission" */
  update_role_permission?: Maybe<Role_Permission_Mutation_Response>;
  /** update multiples rows of table: "role_permission" */
  update_role_permission_many?: Maybe<Array<Maybe<Role_Permission_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "user_permission" */
  update_user_permission?: Maybe<User_Permission_Mutation_Response>;
  /** update multiples rows of table: "user_permission" */
  update_user_permission_many?: Maybe<Array<Maybe<User_Permission_Mutation_Response>>>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<User_Role_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PermissionsArgs = {
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permissions_By_PkArgs = {
  id: Scalars['smallint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Role_PermissionArgs = {
  where: Role_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['smallint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_PermissionArgs = {
  where: User_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PermissionsArgs = {
  objects: Array<Permissions_Insert_Input>;
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permissions_OneArgs = {
  object: Permissions_Insert_Input;
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_PermissionArgs = {
  objects: Array<Role_Permission_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Permission_OneArgs = {
  object: Role_Permission_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_PermissionArgs = {
  objects: Array<User_Permission_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Permission_OneArgs = {
  object: User_Permission_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  loginInput: LoginInput;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PermissionsArgs = {
  _set?: InputMaybe<Permissions_Set_Input>;
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permissions_By_PkArgs = {
  _set?: InputMaybe<Permissions_Set_Input>;
  pk_columns: Permissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Permissions_ManyArgs = {
  updates: Array<Permissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Role_PermissionArgs = {
  _inc?: InputMaybe<Role_Permission_Inc_Input>;
  _set?: InputMaybe<Role_Permission_Set_Input>;
  where: Role_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Permission_ManyArgs = {
  updates: Array<Role_Permission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_PermissionArgs = {
  _inc?: InputMaybe<User_Permission_Inc_Input>;
  _set?: InputMaybe<User_Permission_Set_Input>;
  where: User_Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Permission_ManyArgs = {
  updates: Array<User_Permission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _inc?: InputMaybe<User_Role_Inc_Input>;
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_ManyArgs = {
  updates: Array<User_Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "permissions" */
export type Permissions = {
  __typename?: 'permissions';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['smallint']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  role_permissions: Array<Role_Permission>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permission_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  user_permissions: Array<User_Permission>;
  /** An aggregate relationship */
  user_permissions_aggregate: User_Permission_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "permissions" */
export type PermissionsRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


/** columns and relationships of "permissions" */
export type PermissionsRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


/** columns and relationships of "permissions" */
export type PermissionsUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** columns and relationships of "permissions" */
export type PermissionsUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};

/** aggregated selection of "permissions" */
export type Permissions_Aggregate = {
  __typename?: 'permissions_aggregate';
  aggregate?: Maybe<Permissions_Aggregate_Fields>;
  nodes: Array<Permissions>;
};

/** aggregate fields of "permissions" */
export type Permissions_Aggregate_Fields = {
  __typename?: 'permissions_aggregate_fields';
  avg?: Maybe<Permissions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Permissions_Max_Fields>;
  min?: Maybe<Permissions_Min_Fields>;
  stddev?: Maybe<Permissions_Stddev_Fields>;
  stddev_pop?: Maybe<Permissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Permissions_Stddev_Samp_Fields>;
  sum?: Maybe<Permissions_Sum_Fields>;
  var_pop?: Maybe<Permissions_Var_Pop_Fields>;
  var_samp?: Maybe<Permissions_Var_Samp_Fields>;
  variance?: Maybe<Permissions_Variance_Fields>;
};


/** aggregate fields of "permissions" */
export type Permissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Permissions_Avg_Fields = {
  __typename?: 'permissions_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "permissions". All fields are combined with a logical 'AND'. */
export type Permissions_Bool_Exp = {
  _and?: InputMaybe<Array<Permissions_Bool_Exp>>;
  _not?: InputMaybe<Permissions_Bool_Exp>;
  _or?: InputMaybe<Array<Permissions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Smallint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role_permissions?: InputMaybe<Role_Permission_Bool_Exp>;
  role_permissions_aggregate?: InputMaybe<Role_Permission_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_permissions?: InputMaybe<User_Permission_Bool_Exp>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "permissions" */
export enum Permissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  PermissionsPkey = 'permissions_pkey',
  /** unique or primary key constraint on columns "value" */
  PermissionsValueKey = 'permissions_value_key'
}

/** input type for inserting data into table "permissions" */
export type Permissions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role_permissions?: InputMaybe<Role_Permission_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_permissions?: InputMaybe<User_Permission_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Permissions_Max_Fields = {
  __typename?: 'permissions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['smallint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Permissions_Min_Fields = {
  __typename?: 'permissions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['smallint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "permissions" */
export type Permissions_Mutation_Response = {
  __typename?: 'permissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Permissions>;
};

/** input type for inserting object relation for remote table "permissions" */
export type Permissions_Obj_Rel_Insert_Input = {
  data: Permissions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};

/** on_conflict condition type for table "permissions" */
export type Permissions_On_Conflict = {
  constraint: Permissions_Constraint;
  update_columns?: Array<Permissions_Update_Column>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};

/** Ordering options when selecting data from "permissions". */
export type Permissions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role_permissions_aggregate?: InputMaybe<Role_Permission_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: permissions */
export type Permissions_Pk_Columns_Input = {
  id: Scalars['smallint']['input'];
};

/** select columns of table "permissions" */
export enum Permissions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "permissions" */
export type Permissions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Permissions_Stddev_Fields = {
  __typename?: 'permissions_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Permissions_Stddev_Pop_Fields = {
  __typename?: 'permissions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Permissions_Stddev_Samp_Fields = {
  __typename?: 'permissions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "permissions" */
export type Permissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Permissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Permissions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['smallint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Permissions_Sum_Fields = {
  __typename?: 'permissions_sum_fields';
  id?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "permissions" */
export enum Permissions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

export type Permissions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permissions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Permissions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Permissions_Var_Pop_Fields = {
  __typename?: 'permissions_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Permissions_Var_Samp_Fields = {
  __typename?: 'permissions_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Permissions_Variance_Fields = {
  __typename?: 'permissions_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  getSelf: GetSelfOutput;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** fetch data from the table: "permissions" using primary key columns */
  permissions_by_pk?: Maybe<Permissions>;
  /** fetch data from the table: "role_permission" */
  role_permission: Array<Role_Permission>;
  /** fetch aggregated fields from the table: "role_permission" */
  role_permission_aggregate: Role_Permission_Aggregate;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  sayHello: Scalars['String']['output'];
  showEnv: Scalars['String']['output'];
  /** fetch data from the table: "user_permission" */
  user_permission: Array<User_Permission>;
  /** fetch aggregated fields from the table: "user_permission" */
  user_permission_aggregate: User_Permission_Aggregate;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Query_RootPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Query_RootPermissions_By_PkArgs = {
  id: Scalars['smallint']['input'];
};


export type Query_RootRole_PermissionArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


export type Query_RootRole_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  id: Scalars['smallint']['input'];
};


export type Query_RootUser_PermissionArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Query_RootUser_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "role_permission" */
export type Role_Permission = {
  __typename?: 'role_permission';
  /** An object relationship */
  permission?: Maybe<Permissions>;
  permission_id?: Maybe<Scalars['smallint']['output']>;
  /** An object relationship */
  role?: Maybe<Roles>;
  role_id?: Maybe<Scalars['smallint']['output']>;
};

/** aggregated selection of "role_permission" */
export type Role_Permission_Aggregate = {
  __typename?: 'role_permission_aggregate';
  aggregate?: Maybe<Role_Permission_Aggregate_Fields>;
  nodes: Array<Role_Permission>;
};

export type Role_Permission_Aggregate_Bool_Exp = {
  count?: InputMaybe<Role_Permission_Aggregate_Bool_Exp_Count>;
};

export type Role_Permission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Role_Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Role_Permission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "role_permission" */
export type Role_Permission_Aggregate_Fields = {
  __typename?: 'role_permission_aggregate_fields';
  avg?: Maybe<Role_Permission_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Permission_Max_Fields>;
  min?: Maybe<Role_Permission_Min_Fields>;
  stddev?: Maybe<Role_Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Permission_Sum_Fields>;
  var_pop?: Maybe<Role_Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Permission_Var_Samp_Fields>;
  variance?: Maybe<Role_Permission_Variance_Fields>;
};


/** aggregate fields of "role_permission" */
export type Role_Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "role_permission" */
export type Role_Permission_Aggregate_Order_By = {
  avg?: InputMaybe<Role_Permission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Role_Permission_Max_Order_By>;
  min?: InputMaybe<Role_Permission_Min_Order_By>;
  stddev?: InputMaybe<Role_Permission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Role_Permission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Role_Permission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Role_Permission_Sum_Order_By>;
  var_pop?: InputMaybe<Role_Permission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Role_Permission_Var_Samp_Order_By>;
  variance?: InputMaybe<Role_Permission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "role_permission" */
export type Role_Permission_Arr_Rel_Insert_Input = {
  data: Array<Role_Permission_Insert_Input>;
};

/** aggregate avg on columns */
export type Role_Permission_Avg_Fields = {
  __typename?: 'role_permission_avg_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "role_permission" */
export type Role_Permission_Avg_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role_permission". All fields are combined with a logical 'AND'. */
export type Role_Permission_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Permission_Bool_Exp>>;
  _not?: InputMaybe<Role_Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Permission_Bool_Exp>>;
  permission?: InputMaybe<Permissions_Bool_Exp>;
  permission_id?: InputMaybe<Smallint_Comparison_Exp>;
  role?: InputMaybe<Roles_Bool_Exp>;
  role_id?: InputMaybe<Smallint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "role_permission" */
export type Role_Permission_Inc_Input = {
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  role_id?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "role_permission" */
export type Role_Permission_Insert_Input = {
  permission?: InputMaybe<Permissions_Obj_Rel_Insert_Input>;
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  role?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate max on columns */
export type Role_Permission_Max_Fields = {
  __typename?: 'role_permission_max_fields';
  permission_id?: Maybe<Scalars['smallint']['output']>;
  role_id?: Maybe<Scalars['smallint']['output']>;
};

/** order by max() on columns of table "role_permission" */
export type Role_Permission_Max_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Permission_Min_Fields = {
  __typename?: 'role_permission_min_fields';
  permission_id?: Maybe<Scalars['smallint']['output']>;
  role_id?: Maybe<Scalars['smallint']['output']>;
};

/** order by min() on columns of table "role_permission" */
export type Role_Permission_Min_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "role_permission" */
export type Role_Permission_Mutation_Response = {
  __typename?: 'role_permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Permission>;
};

/** Ordering options when selecting data from "role_permission". */
export type Role_Permission_Order_By = {
  permission?: InputMaybe<Permissions_Order_By>;
  permission_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** select columns of table "role_permission" */
export enum Role_Permission_Select_Column {
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  RoleId = 'role_id'
}

/** input type for updating data in table "role_permission" */
export type Role_Permission_Set_Input = {
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  role_id?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate stddev on columns */
export type Role_Permission_Stddev_Fields = {
  __typename?: 'role_permission_stddev_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "role_permission" */
export type Role_Permission_Stddev_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Role_Permission_Stddev_Pop_Fields = {
  __typename?: 'role_permission_stddev_pop_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "role_permission" */
export type Role_Permission_Stddev_Pop_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Role_Permission_Stddev_Samp_Fields = {
  __typename?: 'role_permission_stddev_samp_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "role_permission" */
export type Role_Permission_Stddev_Samp_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "role_permission" */
export type Role_Permission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Permission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Permission_Stream_Cursor_Value_Input = {
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  role_id?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Role_Permission_Sum_Fields = {
  __typename?: 'role_permission_sum_fields';
  permission_id?: Maybe<Scalars['smallint']['output']>;
  role_id?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "role_permission" */
export type Role_Permission_Sum_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

export type Role_Permission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Permission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Permission_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Permission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Role_Permission_Var_Pop_Fields = {
  __typename?: 'role_permission_var_pop_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "role_permission" */
export type Role_Permission_Var_Pop_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Role_Permission_Var_Samp_Fields = {
  __typename?: 'role_permission_var_samp_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "role_permission" */
export type Role_Permission_Var_Samp_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Role_Permission_Variance_Fields = {
  __typename?: 'role_permission_variance_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "role_permission" */
export type Role_Permission_Variance_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['smallint']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  role_permissions: Array<Role_Permission>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permission_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
};


/** columns and relationships of "roles" */
export type RolesRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  avg?: Maybe<Roles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
  stddev?: Maybe<Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Roles_Sum_Fields>;
  var_pop?: Maybe<Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Roles_Var_Samp_Fields>;
  variance?: Maybe<Roles_Variance_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Roles_Avg_Fields = {
  __typename?: 'roles_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Smallint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role_permissions?: InputMaybe<Role_Permission_Bool_Exp>;
  role_permissions_aggregate?: InputMaybe<Role_Permission_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Role_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role_permissions?: InputMaybe<Role_Permission_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_roles?: InputMaybe<User_Role_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['smallint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['smallint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role_permissions_aggregate?: InputMaybe<Role_Permission_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  id: Scalars['smallint']['input'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Roles_Stddev_Fields = {
  __typename?: 'roles_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Roles_Stddev_Pop_Fields = {
  __typename?: 'roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Roles_Stddev_Samp_Fields = {
  __typename?: 'roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['smallint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Roles_Sum_Fields = {
  __typename?: 'roles_sum_fields';
  id?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Roles_Var_Pop_Fields = {
  __typename?: 'roles_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Roles_Var_Samp_Fields = {
  __typename?: 'roles_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Roles_Variance_Fields = {
  __typename?: 'roles_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** fetch data from the table: "permissions" using primary key columns */
  permissions_by_pk?: Maybe<Permissions>;
  /** fetch data from the table in a streaming manner: "permissions" */
  permissions_stream: Array<Permissions>;
  /** fetch data from the table: "role_permission" */
  role_permission: Array<Role_Permission>;
  /** fetch aggregated fields from the table: "role_permission" */
  role_permission_aggregate: Role_Permission_Aggregate;
  /** fetch data from the table in a streaming manner: "role_permission" */
  role_permission_stream: Array<Role_Permission>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** fetch data from the table: "user_permission" */
  user_permission: Array<User_Permission>;
  /** fetch aggregated fields from the table: "user_permission" */
  user_permission_aggregate: User_Permission_Aggregate;
  /** fetch data from the table in a streaming manner: "user_permission" */
  user_permission_stream: Array<User_Permission>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Subscription_RootPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Subscription_RootPermissions_By_PkArgs = {
  id: Scalars['smallint']['input'];
};


export type Subscription_RootPermissions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Permissions_Stream_Cursor_Input>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Subscription_RootRole_PermissionArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


export type Subscription_RootRole_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Permission_Order_By>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


export type Subscription_RootRole_Permission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Permission_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Permission_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['smallint']['input'];
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootUser_PermissionArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Subscription_RootUser_Permission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Subscription_RootUser_Permission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Permission_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_permission" */
export type User_Permission = {
  __typename?: 'user_permission';
  /** An object relationship */
  permission?: Maybe<Permissions>;
  permission_id?: Maybe<Scalars['smallint']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "user_permission" */
export type User_Permission_Aggregate = {
  __typename?: 'user_permission_aggregate';
  aggregate?: Maybe<User_Permission_Aggregate_Fields>;
  nodes: Array<User_Permission>;
};

export type User_Permission_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Permission_Aggregate_Bool_Exp_Count>;
};

export type User_Permission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Permission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_permission" */
export type User_Permission_Aggregate_Fields = {
  __typename?: 'user_permission_aggregate_fields';
  avg?: Maybe<User_Permission_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Permission_Max_Fields>;
  min?: Maybe<User_Permission_Min_Fields>;
  stddev?: Maybe<User_Permission_Stddev_Fields>;
  stddev_pop?: Maybe<User_Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Permission_Stddev_Samp_Fields>;
  sum?: Maybe<User_Permission_Sum_Fields>;
  var_pop?: Maybe<User_Permission_Var_Pop_Fields>;
  var_samp?: Maybe<User_Permission_Var_Samp_Fields>;
  variance?: Maybe<User_Permission_Variance_Fields>;
};


/** aggregate fields of "user_permission" */
export type User_Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_permission" */
export type User_Permission_Aggregate_Order_By = {
  avg?: InputMaybe<User_Permission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Permission_Max_Order_By>;
  min?: InputMaybe<User_Permission_Min_Order_By>;
  stddev?: InputMaybe<User_Permission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Permission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Permission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Permission_Sum_Order_By>;
  var_pop?: InputMaybe<User_Permission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Permission_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Permission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_permission" */
export type User_Permission_Arr_Rel_Insert_Input = {
  data: Array<User_Permission_Insert_Input>;
};

/** aggregate avg on columns */
export type User_Permission_Avg_Fields = {
  __typename?: 'user_permission_avg_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_permission" */
export type User_Permission_Avg_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_permission". All fields are combined with a logical 'AND'. */
export type User_Permission_Bool_Exp = {
  _and?: InputMaybe<Array<User_Permission_Bool_Exp>>;
  _not?: InputMaybe<User_Permission_Bool_Exp>;
  _or?: InputMaybe<Array<User_Permission_Bool_Exp>>;
  permission?: InputMaybe<Permissions_Bool_Exp>;
  permission_id?: InputMaybe<Smallint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_permission" */
export type User_Permission_Inc_Input = {
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_permission" */
export type User_Permission_Insert_Input = {
  permission?: InputMaybe<Permissions_Obj_Rel_Insert_Input>;
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type User_Permission_Max_Fields = {
  __typename?: 'user_permission_max_fields';
  permission_id?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_permission" */
export type User_Permission_Max_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Permission_Min_Fields = {
  __typename?: 'user_permission_min_fields';
  permission_id?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_permission" */
export type User_Permission_Min_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_permission" */
export type User_Permission_Mutation_Response = {
  __typename?: 'user_permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Permission>;
};

/** Ordering options when selecting data from "user_permission". */
export type User_Permission_Order_By = {
  permission?: InputMaybe<Permissions_Order_By>;
  permission_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_permission" */
export enum User_Permission_Select_Column {
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_permission" */
export type User_Permission_Set_Input = {
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type User_Permission_Stddev_Fields = {
  __typename?: 'user_permission_stddev_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_permission" */
export type User_Permission_Stddev_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Permission_Stddev_Pop_Fields = {
  __typename?: 'user_permission_stddev_pop_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_permission" */
export type User_Permission_Stddev_Pop_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Permission_Stddev_Samp_Fields = {
  __typename?: 'user_permission_stddev_samp_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_permission" */
export type User_Permission_Stddev_Samp_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_permission" */
export type User_Permission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Permission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Permission_Stream_Cursor_Value_Input = {
  permission_id?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type User_Permission_Sum_Fields = {
  __typename?: 'user_permission_sum_fields';
  permission_id?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_permission" */
export type User_Permission_Sum_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

export type User_Permission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Permission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Permission_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Permission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Permission_Var_Pop_Fields = {
  __typename?: 'user_permission_var_pop_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_permission" */
export type User_Permission_Var_Pop_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Permission_Var_Samp_Fields = {
  __typename?: 'user_permission_var_samp_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_permission" */
export type User_Permission_Var_Samp_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Permission_Variance_Fields = {
  __typename?: 'user_permission_variance_fields';
  permission_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_permission" */
export type User_Permission_Variance_Order_By = {
  permission_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  /** An object relationship */
  role?: Maybe<Roles>;
  role_id?: Maybe<Scalars['smallint']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

export type User_Role_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Role_Aggregate_Bool_Exp_Count>;
};

export type User_Role_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Role_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  avg?: Maybe<User_Role_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
  stddev?: Maybe<User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_Sum_Fields>;
  var_pop?: Maybe<User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_Var_Samp_Fields>;
  variance?: Maybe<User_Role_Variance_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  avg?: InputMaybe<User_Role_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Role_Max_Order_By>;
  min?: InputMaybe<User_Role_Min_Order_By>;
  stddev?: InputMaybe<User_Role_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Role_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Role_Sum_Order_By>;
  var_pop?: InputMaybe<User_Role_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Role_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_role" */
export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
};

/** aggregate avg on columns */
export type User_Role_Avg_Fields = {
  __typename?: 'user_role_avg_fields';
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_role" */
export type User_Role_Avg_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  role?: InputMaybe<Roles_Bool_Exp>;
  role_id?: InputMaybe<Smallint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_role" */
export type User_Role_Inc_Input = {
  role_id?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  role?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['smallint']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  role_id?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  role_id?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  role?: InputMaybe<Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  role_id?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type User_Role_Stddev_Fields = {
  __typename?: 'user_role_stddev_fields';
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_role" */
export type User_Role_Stddev_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Role_Stddev_Pop_Fields = {
  __typename?: 'user_role_stddev_pop_fields';
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_role" */
export type User_Role_Stddev_Pop_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Role_Stddev_Samp_Fields = {
  __typename?: 'user_role_stddev_samp_fields';
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_role" */
export type User_Role_Stddev_Samp_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  role_id?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type User_Role_Sum_Fields = {
  __typename?: 'user_role_sum_fields';
  role_id?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_role" */
export type User_Role_Sum_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

export type User_Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Role_Var_Pop_Fields = {
  __typename?: 'user_role_var_pop_fields';
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_role" */
export type User_Role_Var_Pop_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Role_Var_Samp_Fields = {
  __typename?: 'user_role_var_samp_fields';
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_role" */
export type User_Role_Var_Samp_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Role_Variance_Fields = {
  __typename?: 'user_role_variance_fields';
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_role" */
export type User_Role_Variance_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Accounts>;
  address?: Maybe<Scalars['String']['output']>;
  birthday: Scalars['date']['output'];
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  last_name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  user_permissions: Array<User_Permission>;
  /** An aggregate relationship */
  user_permissions_aggregate: User_Permission_Aggregate;
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
};


/** columns and relationships of "users" */
export type UsersUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Permission_Order_By>>;
  where?: InputMaybe<User_Permission_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  birthday?: InputMaybe<Date_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  district?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_permissions?: InputMaybe<User_Permission_Bool_Exp>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Bool_Exp>;
  user_roles?: InputMaybe<User_Role_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_permissions?: InputMaybe<User_Permission_Arr_Rel_Insert_Input>;
  user_roles?: InputMaybe<User_Role_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  address?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  district?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_permissions_aggregate?: InputMaybe<User_Permission_Aggregate_Order_By>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  District = 'district',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  District = 'district',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GetPermissionQueryVariables = Exact<{
  id: Scalars['smallint']['input'];
}>;


export type GetPermissionQuery = { __typename?: 'query_root', permissions_by_pk?: { __typename?: 'permissions', id: any, name: string, created_at?: any | null, updated_at?: any | null } | null };

export type UpdatePermissionMutationVariables = Exact<{
  id: Scalars['smallint']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdatePermissionMutation = { __typename?: 'mutation_root', update_permissions_by_pk?: { __typename?: 'permissions', id: any } | null };

export type ListPermissionsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type ListPermissionsQuery = { __typename?: 'query_root', permissions: Array<{ __typename?: 'permissions', id: any, name: string, value: string, created_at?: any | null, updated_at?: any | null }>, permissions_aggregate: { __typename?: 'permissions_aggregate', aggregate?: { __typename?: 'permissions_aggregate_fields', count: number } | null } };

export type GetRoleQueryVariables = Exact<{
  id: Scalars['smallint']['input'];
}>;


export type GetRoleQuery = { __typename?: 'query_root', roles_by_pk?: { __typename?: 'roles', id: any, name: string, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null } | null, role_permission: Array<{ __typename?: 'role_permission', role_id?: any | null, permission_id?: any | null }> };

export type UpdateRoleMutationVariables = Exact<{
  id: Scalars['smallint']['input'];
  name: Scalars['String']['input'];
  objects: Array<Role_Permission_Insert_Input> | Role_Permission_Insert_Input;
}>;


export type UpdateRoleMutation = { __typename?: 'mutation_root', update_roles_by_pk?: { __typename?: 'roles', id: any } | null, delete_role_permission?: { __typename?: 'role_permission_mutation_response', affected_rows: number } | null, insert_role_permission?: { __typename?: 'role_permission_mutation_response', affected_rows: number } | null };

export type CreateRoleMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateRoleMutation = { __typename?: 'mutation_root', insert_roles_one?: { __typename?: 'roles', id: any } | null };

export type ListRolesQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type ListRolesQuery = { __typename?: 'query_root', roles: Array<{ __typename?: 'roles', id: any, name: string, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null }>, roles_aggregate: { __typename?: 'roles_aggregate', aggregate?: { __typename?: 'roles_aggregate_fields', count: number } | null } };

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['smallint']['input'];
}>;


export type DeleteRoleMutation = { __typename?: 'mutation_root', update_roles?: { __typename?: 'roles_mutation_response', affected_rows: number } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'mutation_root', logout: boolean };

export type GetSelfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfQuery = { __typename?: 'query_root', getSelf: { __typename?: 'GetSelfOutput', address: string, birthday: string, city: string, country: string, updatedAt: any, phone: string, lastName: string, id: number, firstName: string, district: string, createdAt: any, roles: Array<string>, permissions: Array<string> } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'mutation_root', login: { __typename?: 'LoginOutput', accessToken: string, refreshAccessToken: string, address?: string | null, birthday: string, city?: string | null, country?: string | null, createdAt: any, district?: string | null, firstName: string, id: number, lastName: string, phone?: string | null, updatedAt: any, roles: Array<string>, permissions: Array<string> } };

export type ListPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPermissionsQuery = { __typename?: 'query_root', permissions: Array<{ __typename?: 'permissions', id: any, name: string, value: string }> };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'mutation_root', refreshTokens: { __typename?: 'RefreshTokenOutput', accessToken: string, refreshAccessToken: string } };


export const GetPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"smallint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissions_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetPermissionQuery, GetPermissionQueryVariables>;
export const UpdatePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"smallint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_permissions_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"StringValue","value":"now()","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePermissionMutation, UpdatePermissionMutationVariables>;
export const ListPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permissions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ListPermissionsQuery, ListPermissionsQueryVariables>;
export const GetRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"smallint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role_permission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"role_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role_id"}},{"kind":"Field","name":{"kind":"Name","value":"permission_id"}}]}}]}}]} as unknown as DocumentNode<GetRoleQuery, GetRoleQueryVariables>;
export const UpdateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"smallint"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"role_permission_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_roles_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"StringValue","value":"now()","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_role_permission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"role_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_role_permission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_roles_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"StringValue","value":"now()","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"StringValue","value":"now()","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const ListRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"deleted_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"deleted_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ListRolesQuery, ListRolesQueryVariables>;
export const DeleteRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"smallint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_nin"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"admin","block":false},{"kind":"StringValue","value":"manager","block":false},{"kind":"StringValue","value":"user","block":false}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"deleted_at"},"value":{"kind":"StringValue","value":"now()","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const GetSelfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<GetSelfQuery, GetSelfQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshAccessToken"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ListPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<ListPermissionsQuery, ListPermissionsQueryVariables>;
export const RefreshTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshAccessToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>;