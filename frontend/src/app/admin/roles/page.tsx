"use client";

const GET_LIST_ROLES = gql`
  query ListRoles($limit: Int!, $offset: Int!) {
    roles(
      where: { deleted_at: { _is_null: true } }
      limit: $limit
      offset: $offset
      order_by: { id: asc }
    ) {
      id
      name
      created_at
      updated_at
      deleted_at
    }
    roles_aggregate {
      aggregate {
        count
      }
    }
  }
`;

import PaginationTable, {
  TypeColumn,
} from "@/components/admin/table/PaginationTable";
import { Roles } from "@/gql/graphql";
import { useMoment } from "@/hooks/useMoment";
import { HASURA_ADMIN_ROLE } from "@/utils/constants";
import { gql, useLazyQuery } from "@apollo/client";
import { Button, Link, Tooltip } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Key, useEffect, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export default function AdminRolesPage() {
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
            <Tooltip color="danger" content="Delete">
              <Button
                isIconOnly
                className="p-0 m-0"
                size="sm"
                color="danger"
                variant="solid"
              >
                <FaRegTrashAlt />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  const handleRowsPerPageChange = (limit: number) => {
    fetchData(limit);
  };

  // Graphql query hook
  const [getListRoles, { data, loading }] = useLazyQuery<any>(GET_LIST_ROLES);

  const fetchData = (limit: number) => {
    getListRoles({
      variables: {
        limit: limit,
        offset: (page - 1) * limit,
      },
      context: {
        headers: {
          "x-hasura-role": HASURA_ADMIN_ROLE,
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

  return (
    <PaginationTable
      loading={loading}
      total={total}
      columns={columns}
      items={items}
      renderCells={renderCells}
      onRowsPerPageChange={handleRowsPerPageChange}
    />
  );
}
