"use client";

const GET_LIST_ROLES = gql`
  query ListRoles($limit: Int!, $offset: Int!) {
    roles(limit: $limit, offset: $offset, order_by: { id: asc }) {
      id
      name
      created_at
      deleted_at
    }
    roles_aggregate {
      aggregate {
        count
      }
    }
  }
`;

import PaginationTable, { TypeColumn } from "@/components/admin/table/PaginationTable";
import { Roles, Roles_Aggregate } from "@/gql/graphql";
import { HASURA_ADMIN_ROLE, PAGINATION_LIMIT } from "@/utils/constants";
import { gql, useLazyQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { Key, useCallback, useEffect, useState } from "react";

export default function AdminRolesPage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const [total, setTotal] = useState<number>(0);
  const [items, setItems] = useState<Roles[]>([]);

  // Define columns
  const columns: TypeColumn[] = [
    { name: "NAME", uid: "name" },
    { name: "CREATED AT", uid: "created_at" },
    { name: "UPDATED AT", uid: "updated_at" },
    { name: "ACTIONS", uid: "actions" },
  ];

  // Render data
  const renderData = useCallback(
    (role: Roles, columnKey: Key) => {
      const cellValue = role[columnKey as keyof Roles];

      switch (columnKey) {
        case "created_at":
          return <>{role.created_at}</>;
        case "updated_at":
          return <>{role.updated_at}</>;
        case "actions":

        default:
          return cellValue;
      }
    },
    [items]
  );

  // Graphql query hook
  const [getListRoles, { data, loading }] = useLazyQuery<any>(GET_LIST_ROLES);

  // Fetch data by watching page changes
  useEffect(() => {
    getListRoles({
      variables: {
        limit: PAGINATION_LIMIT,
        offset: (page - 1) * PAGINATION_LIMIT,
      },
      context: {
        headers: {
          "x-hasura-role": HASURA_ADMIN_ROLE,
        },
      },
    });
  }, [page]);

  // Set total and items
  useEffect(() => {
    if (data) {
      const _total = data.roles_aggregate.aggregate.count || 0;
      setTotal(_total);

      const _items = data.roles;
      setItems(_items);
    }
  }, [data]);

  return (
    <PaginationTable
      loading={loading}
      total={total}
      columns={columns}
      items={items}
      renderData={renderData}
    />
  );
}
