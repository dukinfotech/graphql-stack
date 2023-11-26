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
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query getSelf {\n    getSelf {\n      address\n      birthday\n      city\n      country\n      updatedAt\n      phone\n      lastName\n      id\n      firstName\n      district\n      createdAt\n    }\n  }\n": types.GetSelfDocument,
    "\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: {email: $email, password: $password}) {\n      accessToken\n      refreshAccessToken\n      address\n      birthday\n      city\n      country\n      createdAt\n      district\n      firstName\n      id\n      lastName\n      phone\n      updatedAt\n    }\n  }\n": types.LoginDocument,
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
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSelf {\n    getSelf {\n      address\n      birthday\n      city\n      country\n      updatedAt\n      phone\n      lastName\n      id\n      firstName\n      district\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query getSelf {\n    getSelf {\n      address\n      birthday\n      city\n      country\n      updatedAt\n      phone\n      lastName\n      id\n      firstName\n      district\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: {email: $email, password: $password}) {\n      accessToken\n      refreshAccessToken\n      address\n      birthday\n      city\n      country\n      createdAt\n      district\n      firstName\n      id\n      lastName\n      phone\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(loginInput: {email: $email, password: $password}) {\n      accessToken\n      refreshAccessToken\n      address\n      birthday\n      city\n      country\n      createdAt\n      district\n      firstName\n      id\n      lastName\n      phone\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;