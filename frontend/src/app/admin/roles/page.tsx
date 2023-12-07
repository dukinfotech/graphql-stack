"use client";

import PaginationTable, {
  TypeColumn,
} from "@/components/admin/table/PaginationTable";
import { Roles } from "@/gql/graphql";
import { useMoment } from "@/hooks/useMoment";
import { useAuthStore } from "@/stores/authStore";
import {
  HASURA_ADMIN_ROLE,
  HASURA_MANAGER_ROLE,
  HASURA_USER_ROLE,
} from "@/utils/constants";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { Button, Link, Tooltip } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Key, useEffect, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const GET_LIST_ROLES = gql`
  query ListRoles($limit: Int!, $offset: Int!) {
    roles(
      where: { deleted_at: { _is_null: true } }
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
    ) {
      id
      name
      created_at
      updated_at
      deleted_at
    }
    roles_aggregate(where: { deleted_at: { _is_null: true } }) {
      aggregate {
        count
      }
    }
  }
`;

const DELETE_ROLE = gql`
  mutation deleteRole($id: smallint!) {
    update_roles(
      where: { id: { _eq: $id }, name: { _nin: ["admin", "manager", "user"] } }
      _set: { deleted_at: "now()" }
    ) {
      affected_rows
    }
  }
`;

export default function AdminRolesPage() {
  const defaultRoles = [
    HASURA_ADMIN_ROLE,
    HASURA_MANAGER_ROLE,
    HASURA_USER_ROLE,
  ];
  const { getPriorityRole } = useAuthStore((state) => state);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const [total, setTotal] = useState<number>(0);
  const [items, setItems] = useState<Roles[]>([]);
  const { timestamp } = useMoment();

  // Define columns
  const columns: TypeColumn[] = [
    { name: "NAME", uid: "name" },
    { name: "CREATED AT", uid: "created_at" },
    { name: "UPDATED AT", uid: "updated_at" },
    { name: "ACTIONS", uid: "actions" },
  ];
  // Render cells
  const renderCells = (role: Roles, columnKey: Key) => {
    const cellValue = role[columnKey as keyof Roles];
    switch (columnKey) {
      case "created_at":
      case "updated_at":
        return timestamp(cellValue);
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="warning" content="Edit">
              <Button
                isIconOnly
                className="p-0 m-0"
                href={`/admin/roles/${role.id}/edit`}
                as={Link}
                size="sm"
                color="warning"
                variant="solid"
              >
                <FaRegEdit />
              </Button>
            </Tooltip>
            {!defaultRoles.includes(role.name) && (
              <Tooltip color="danger" content="Delete">
                <Button
                  isIconOnly
                  isLoading={deleting}
                  className="p-0 m-0"
                  size="sm"
                  color="danger"
                  variant="solid"
                  onClick={() => handleDelete(role.id)}
                >
                  <FaRegTrashAlt />
                </Button>
              </Tooltip>
            )}
          </div>
        );
      default:
        return cellValue;
    }
  };

  // Graphql query hook
  const [getListRoles, { data, loading: fetching }] =
    useLazyQuery<any>(GET_LIST_ROLES);

  const [deleteRole, { loading: deleting }] = useMutation<any>(DELETE_ROLE);

  // Fetch data
  const fetchData = (limit: number) => {
    getListRoles({
      variables: {
        limit: limit,
        offset: (page - 1) * limit,
      },
      context: {
        headers: {
          "x-hasura-role": getPriorityRole(),
        },
      },
    });
  };

  // Set total and items
  useEffect(() => {
    if (data) {
      const _total = data.roles_aggregate.aggregate.count || 0;
      setTotal(_total);

      const _items = data.roles;
      setItems(_items);
    }
  }, [data]);

  // Refetch data when limit change
  const handleRowsPerPageChange = (limit: number) => {
    fetchData(limit);
  };

  const handleDelete = (id: number) => {
    console.log(id);
    if (confirm("Are you sure want to delete this role?")) {
      deleteRole({
        variables: {
          id: id,
        },
        context: {
          headers: {
            "x-hasura-role": getPriorityRole(),
          },
        },
        refetchQueries: [GET_LIST_ROLES],
      });
    }
  };

  return (
    <>
      <Button
        className="mb-3"
        href="/admin/roles/create"
        as={Link}
        color="primary"
        variant="solid"
      >
        Create
      </Button>
      <PaginationTable
        loading={fetching}
        total={total}
        columns={columns}
        items={items}
        renderCells={renderCells}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
}
