import {
  ChangeEvent,
  Key,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Selection,
  Pagination,
  Spinner,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
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
  renderCells: (item: any, columnKey: Key) => ReactNode;
  onRowsPerPageChange: (limit: number) => void;
}

export default function PaginationTable({
  loading,
  total,
  columns,
  items,
  renderCells,
  onRowsPerPageChange,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const rowsPerPageOptions = [10, 20, 50, 100];
  const [limit, setLimit] = useState<number>(rowsPerPageOptions[0]);

  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  const pageTotal = useMemo(() => {
    return Math.ceil(total / limit);
  }, [total, limit]);

  // Loading state
  const loadingState = useMemo(() => {
    return loading ? "loading" : "idle";
  }, [loading]);

  useEffect(() => {
    onRowsPerPageChange(limit);
  }, [limit]);

  const handleChangeRowPerPage = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setLimit(Number(e.target.value));
      handleChangePage(1);
    },
    []
  );

  // Previous page
  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      handleChangePage(page - 1);
    }
  }, [page]);

  // Next page
  const onNextPage = useCallback(() => {
    if (page < pageTotal) {
      handleChangePage(page + 1);
    }
  }, [page, pageTotal]);

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

  // Top Content
  const topContent = useMemo(() => {
    return (
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">Total {total} items</span>
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={handleChangeRowPerPage}
          >
            {rowsPerPageOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }, [selectedKeys, total, items.length]);

  // Bottom Content
  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${total} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pageTotal}
          onChange={(page) => handleChangePage(page)}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pageTotal === 1 || page === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pageTotal === 1 || page === pageTotal}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, total, page, pageTotal, items.length]);

  return (
    <Table
      aria-label="table"
      color="primary"
      selectionMode="multiple"
      onSelectionChange={setSelectedKeys}
      topContent={topContent}
      topContentPlacement="outside"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
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
