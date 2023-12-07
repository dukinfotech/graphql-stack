import { Permissions } from "@/gql/graphql";
import { useAuthStore } from "@/stores/authStore";
import { gql, useQuery } from "@apollo/client";
import {
  Chip,
  Select,
  Selection,
  SelectItem,
  SelectedItems,
} from "@nextui-org/react";
import { Key, useEffect, useState } from "react";

const LIST_PERMISSIONS = gql`
  query listPermissions {
    permissions {
      id
      name
      value
    }
  }
`;

interface Props {
  defaultSelectedIds?: number[];
  onSelectedIdsChange: (selectedIds: number[]) => void;
}

export default function MultiSelectPermission({
  defaultSelectedIds,
  onSelectedIdsChange,
}: Props) {
  const { getPriorityRole } = useAuthStore((state) => state);
  const [permissions, setPermissions] = useState<
    Pick<Permissions, "id" | "name" | "value">[]
  >([]);
  const [selectedPermissionIds, setSelectedPermissionIds] = useState<Selection>(
    new Set([])
  );

  const { data: listPermissionsData } = useQuery(LIST_PERMISSIONS, {
    context: {
      headers: {
        "x-hasura-role": getPriorityRole(),
      },
    },
  });

  const handleUnselectPermission = (id: Key | undefined) => {
    const _selectedPermissionIds = new Set(
      [...selectedPermissionIds].filter((permissionId) => permissionId !== id)
    );
    setSelectedPermissionIds(_selectedPermissionIds);
  };

  // Set default selected permission ids
  useEffect(() => {
    if (defaultSelectedIds) {
      setSelectedPermissionIds(new Set(defaultSelectedIds.map(String)));
    }
  }, [defaultSelectedIds?.length]);

  // Fetch permissions
  useEffect(() => {
    if (listPermissionsData) {
      const _permissions = listPermissionsData.permissions;
      setPermissions(_permissions);
    }
  }, [listPermissionsData]);

  // Event selected permision ids changes
  useEffect(() => {
    onSelectedIdsChange([...selectedPermissionIds].map(Number));
  }, [selectedPermissionIds]);

  return (
    <Select
      label="Permissions"
      placeholder="Attach permissions"
      selectionMode="multiple"
      selectedKeys={selectedPermissionIds}
      onSelectionChange={setSelectedPermissionIds}
      renderValue={(
        items: SelectedItems<Pick<Permissions, "id" | "name" | "value">>
      ) => {
        return (
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <Chip
                key={i}
                color="success"
                onClose={() => handleUnselectPermission(item.key)}
              >
                {item.textValue}
              </Chip>
            ))}
          </div>
        );
      }}
    >
      {permissions.map((permission) => (
        <SelectItem key={permission.id} value={permission.id}>
          {permission.name}
        </SelectItem>
      ))}
    </Select>
  );
}
