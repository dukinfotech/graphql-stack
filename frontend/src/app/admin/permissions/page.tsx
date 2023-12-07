"use client";

import PaginationTable, {
  TypeColumn,
} from "@/components/admin/table/PaginationTable";
import { Permissions } from "@/gql/graphql";
import { useMoment } from "@/hooks/useMoment";
import { HASURA_ADMIN_ROLE } from "@/utils/constants";
import { gql, useLazyQuery } from "@apollo/client";
import { Button, Link, Tooltip } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Key, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const GET_LIST_PERMISSIONS = gql`
  query ListPermissions($limit: Int!, $offset: Int!) {
    permissions(
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
    ) {
      id
      name
      value
      created_at
      updated_at
    }
    permissions_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export default function AdminPermissionsPage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const [total, setTotal] = useState<number>(0);
  const [items, setItems] = useState<Permissions[]>([]);
  const { timestamp } = useMoment();

  // Define columns
  const columns: TypeColumn[] = [
    { name: "NAME", uid: "name" },
    { name: "VALUE", uid: "value" },
    { name: "CREATED AT", uid: "created_at" },
    { name: "UPDATED AT", uid: "updated_at" },
    { name: "ACTIONS", uid: "actions" },
  ];
  // Render cells
  const renderCells = (permission: Permissions, columnKey: Key) => {
    const cellValue = permission[columnKey as keyof Permissions];
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
                href={`/admin/permissions/${permission.id}/edit`}
                as={Link}
                size="sm"
                color="warning"
                variant="solid"
              >
                <FaRegEdit />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  // Graphql query hook
  const [getListPermissions, { data, loading: fetching }] =
    useLazyQuery<any>(GET_LIST_PERMISSIONS);

  // Fetch data
  const fetchData = (limit: number) => {
    getListPermissions({
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
      const _total = data.permissions_aggregate.aggregate.count || 0;
      setTotal(_total);

      const _items = data.permissions;
      setItems(_items);
    }
  }, [data]);

  // Refetch data when limit change
  const handleRowsPerPageChange = (limit: number) => {
    fetchData(limit);
  };

  return (
    <>
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
