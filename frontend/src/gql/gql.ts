/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getPermission($id: smallint!) {\n    permissions_by_pk(id: $id) {\n      id\n      name\n      created_at\n      updated_at\n    }\n  }\n": types.GetPermissionDocument,
    "\n  mutation updatePermission($id: smallint!, $name: String!) {\n    update_permissions_by_pk(\n      pk_columns: { id: $id }\n      _set: { name: $name, updated_at: \"now()\" }\n    ) {\n      id\n    }\n  }\n": types.UpdatePermissionDocument,
    "\n  query ListPermissions($limit: Int!, $offset: Int!) {\n    permissions(\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n      value\n      created_at\n      updated_at\n    }\n    permissions_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.ListPermissionsDocument,
    "\n  query getRole($id: smallint!) {\n    roles_by_pk(id: $id) {\n      id\n      name\n      created_at\n      updated_at\n      deleted_at\n    }\n    role_permission(where: { role_id: { _eq: $id } }) {\n      role_id\n      permission_id\n    }\n  }\n": types.GetRoleDocument,
    "\n  mutation updateRole(\n    $id: smallint!\n    $name: String!\n    $objects: [role_permission_insert_input!]!\n  ) {\n    update_roles(\n      where: { id: { _eq: $id }, name: { _nin: [\"admin\", \"manager\", \"user\"] } }\n      _set: { name: $name }\n    ) {\n      affected_rows\n    }\n    delete_role_permission(where: { role_id: { _eq: $id } }) {\n      affected_rows\n    }\n    insert_role_permission(objects: $objects) {\n      affected_rows\n    }\n  }\n": types.UpdateRoleDocument,
    "\n  mutation createRole($name: String!) {\n    insert_roles_one(\n      object: { name: $name, created_at: \"now()\", updated_at: \"now()\" }\n    ) {\n      id\n    }\n  }\n": types.CreateRoleDocument,
    "\n  query ListRoles($limit: Int!, $offset: Int!) {\n    roles(\n      where: { deleted_at: { _is_null: true } }\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n      created_at\n      updated_at\n      deleted_at\n    }\n    roles_aggregate(where: { deleted_at: { _is_null: true } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.ListRolesDocument,
    "\n  mutation deleteRole($id: smallint!) {\n    update_roles(\n      where: { id: { _eq: $id }, name: { _nin: [\"admin\", \"manager\", \"user\"] } }\n      _set: { deleted_at: \"now()\" }\n    ) {\n      affected_rows\n    }\n  }\n": types.DeleteRoleDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query getSelf {\n    getSelf {\n      address\n      birthday\n      city\n      country\n      updatedAt\n      phone\n      lastName\n      id\n      firstName\n      district\n      createdAt\n      roles\n      permissions\n    }\n  }\n": types.GetSelfDocument,
    "\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      accessToken\n      refreshAccessToken\n      address\n      birthday\n      city\n      country\n      createdAt\n      district\n      firstName\n      id\n      lastName\n      phone\n      updatedAt\n      roles\n      permissions\n    }\n  }\n": types.LoginDocument,
    "\n  query listPermissions {\n    permissions {\n      id\n      name\n      value\n    }\n  }\n": types.ListPermissionsDocument,
    "\n  mutation refreshTokens {\n    refreshTokens {\n      accessToken\n      refreshAccessToken\n    }\n  }\n": types.RefreshTokensDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPermission($id: smallint!) {\n    permissions_by_pk(id: $id) {\n      id\n      name\n      created_at\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  query getPermission($id: smallint!) {\n    permissions_by_pk(id: $id) {\n      id\n      name\n      created_at\n      updated_at\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePermission($id: smallint!, $name: String!) {\n    update_permissions_by_pk(\n      pk_columns: { id: $id }\n      _set: { name: $name, updated_at: \"now()\" }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updatePermission($id: smallint!, $name: String!) {\n    update_permissions_by_pk(\n      pk_columns: { id: $id }\n      _set: { name: $name, updated_at: \"now()\" }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ListPermissions($limit: Int!, $offset: Int!) {\n    permissions(\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n      value\n      created_at\n      updated_at\n    }\n    permissions_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query ListPermissions($limit: Int!, $offset: Int!) {\n    permissions(\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n      value\n      created_at\n      updated_at\n    }\n    permissions_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getRole($id: smallint!) {\n    roles_by_pk(id: $id) {\n      id\n      name\n      created_at\n      updated_at\n      deleted_at\n    }\n    role_permission(where: { role_id: { _eq: $id } }) {\n      role_id\n      permission_id\n    }\n  }\n"): (typeof documents)["\n  query getRole($id: smallint!) {\n    roles_by_pk(id: $id) {\n      id\n      name\n      created_at\n      updated_at\n      deleted_at\n    }\n    role_permission(where: { role_id: { _eq: $id } }) {\n      role_id\n      permission_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateRole(\n    $id: smallint!\n    $name: String!\n    $objects: [role_permission_insert_input!]!\n  ) {\n    update_roles(\n      where: { id: { _eq: $id }, name: { _nin: [\"admin\", \"manager\", \"user\"] } }\n      _set: { name: $name }\n    ) {\n      affected_rows\n    }\n    delete_role_permission(where: { role_id: { _eq: $id } }) {\n      affected_rows\n    }\n    insert_role_permission(objects: $objects) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation updateRole(\n    $id: smallint!\n    $name: String!\n    $objects: [role_permission_insert_input!]!\n  ) {\n    update_roles(\n      where: { id: { _eq: $id }, name: { _nin: [\"admin\", \"manager\", \"user\"] } }\n      _set: { name: $name }\n    ) {\n      affected_rows\n    }\n    delete_role_permission(where: { role_id: { _eq: $id } }) {\n      affected_rows\n    }\n    insert_role_permission(objects: $objects) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createRole($name: String!) {\n    insert_roles_one(\n      object: { name: $name, created_at: \"now()\", updated_at: \"now()\" }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createRole($name: String!) {\n    insert_roles_one(\n      object: { name: $name, created_at: \"now()\", updated_at: \"now()\" }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ListRoles($limit: Int!, $offset: Int!) {\n    roles(\n      where: { deleted_at: { _is_null: true } }\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n      created_at\n      updated_at\n      deleted_at\n    }\n    roles_aggregate(where: { deleted_at: { _is_null: true } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query ListRoles($limit: Int!, $offset: Int!) {\n    roles(\n      where: { deleted_at: { _is_null: true } }\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      id\n      name\n      created_at\n      updated_at\n      deleted_at\n    }\n    roles_aggregate(where: { deleted_at: { _is_null: true } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteRole($id: smallint!) {\n    update_roles(\n      where: { id: { _eq: $id }, name: { _nin: [\"admin\", \"manager\", \"user\"] } }\n      _set: { deleted_at: \"now()\" }\n    ) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation deleteRole($id: smallint!) {\n    update_roles(\n      where: { id: { _eq: $id }, name: { _nin: [\"admin\", \"manager\", \"user\"] } }\n      _set: { deleted_at: \"now()\" }\n    ) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSelf {\n    getSelf {\n      address\n      birthday\n      city\n      country\n      updatedAt\n      phone\n      lastName\n      id\n      firstName\n      district\n      createdAt\n      roles\n      permissions\n    }\n  }\n"): (typeof documents)["\n  query getSelf {\n    getSelf {\n      address\n      birthday\n      city\n      country\n      updatedAt\n      phone\n      lastName\n      id\n      firstName\n      district\n      createdAt\n      roles\n      permissions\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      accessToken\n      refreshAccessToken\n      address\n      birthday\n      city\n      country\n      createdAt\n      district\n      firstName\n      id\n      lastName\n      phone\n      updatedAt\n      roles\n      permissions\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      accessToken\n      refreshAccessToken\n      address\n      birthday\n      city\n      country\n      createdAt\n      district\n      firstName\n      id\n      lastName\n      phone\n      updatedAt\n      roles\n      permissions\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query listPermissions {\n    permissions {\n      id\n      name\n      value\n    }\n  }\n"): (typeof documents)["\n  query listPermissions {\n    permissions {\n      id\n      name\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation refreshTokens {\n    refreshTokens {\n      accessToken\n      refreshAccessToken\n    }\n  }\n"): (typeof documents)["\n  mutation refreshTokens {\n    refreshTokens {\n      accessToken\n      refreshAccessToken\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;