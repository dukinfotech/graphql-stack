import React, { Key, ReactNode, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
  Pagination,
  Spinner,
} from "@nextui-org/react";
import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGINATION_LIMIT } from "@/utils/constants";

export type TypeColumn = {
  name: string;
  uid: string;
};

interface Props {
  loading: boolean;
  total: number;
  columns: TypeColumn[];
  items: any[];
  renderData: (item: any, columnKey: Key) => ReactNode;
}

export default function PaginationTable({
  loading,
  total,
  columns,
  items,
  renderData,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  // Loading state
  const loadingState = useMemo(() => {
    return loading ? "loading" : "idle";
  }, [loading]);

  // Update query string
  const handleChangePage = (page: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (!page) {
      current.delete("page");
    } else {
      current.set("page", page.toString());
    }

    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  // Pagination ReactNode
  const PaginationWrapper = () => {
    return (
      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={Math.ceil(total / PAGINATION_LIMIT)}
          onChange={(page) => handleChangePage(page)}
        />
      </div>
    );
  };

  // Render cells
  const renderCells = (item: any, columnKey: Key) => {
    switch (columnKey) {
      case "created_at":
      case "updated_at":
        return <>123</>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="primary" content="View">
              <span className="text-lg text-primary cursor-pointer active:opacity-50">
                <FaRegEye />
              </span>
            </Tooltip>
            <Tooltip color="secondary" content="Edit">
              <span className="text-lg text-secondary cursor-pointer active:opacity-50">
                <FaRegEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <FaRegTrashAlt />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return renderData(item, columnKey);
    }
  };

  return (
    <Table
      aria-label="table"
      color="primary"
      selectionMode="multiple"
      bottomContent={<PaginationWrapper />}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align="center">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={items}
        emptyContent={"No rows to display."}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell key={columnKey}>
                {renderCells(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
