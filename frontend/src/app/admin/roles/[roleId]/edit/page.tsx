"use client";

import MultiSelectPermission from "@/components/permissions/multi-select-permission";
import { useAuthStore } from "@/stores/authStore";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { defaultRoles } from "../../page";

const GET_ROLE = gql`
  query getRole($id: smallint!) {
    roles_by_pk(id: $id) {
      id
      name
      created_at
      updated_at
      deleted_at
    }
    role_permission(where: { role_id: { _eq: $id } }) {
      role_id
      permission_id
    }
  }
`;

const UPDATE_ROLE = gql`
  mutation updateRole(
    $id: smallint!
    $name: String!
    $objects: [role_permission_insert_input!]!
  ) {
    update_roles(
      where: { id: { _eq: $id }, name: { _nin: ["admin", "manager", "user"] } }
      _set: { name: $name }
    ) {
      affected_rows
    }
    delete_role_permission(where: { role_id: { _eq: $id } }) {
      affected_rows
    }
    insert_role_permission(objects: $objects) {
      affected_rows
    }
  }
`;

type EditRoleForm = {
  name?: string;
  permissionIds: number[];
};

export default function AdminEditRolePage({
  params,
}: {
  params: { roleId: number };
}) {
  const roleId = params.roleId;
  const { getPriorityRole } = useAuthStore((state) => state);
  const router = useRouter();
  const [isDefaultRole, setIsDefaultRole] = useState<boolean>(false);
  const [editRoleForm, setEditRoleForm] = useState<EditRoleForm>({
    name: undefined,
    permissionIds: [],
  });

  const isNameInvalid = useMemo(() => {
    return editRoleForm && editRoleForm.name === "";
  }, [editRoleForm?.name]);

  const { data: getRoleData, loading: fetching } = useQuery(GET_ROLE, {
    variables: {
      id: roleId,
    },
    context: {
      headers: {
        "x-hasura-role": getPriorityRole(),
      },
    },
  });

  const [updateRole, { loading: updating }] = useMutation(UPDATE_ROLE);

  useEffect(() => {
    if (getRoleData) {
      const _role = getRoleData.roles_by_pk;
      const _permissionIds = getRoleData.role_permission.map(
        (rp: any) => rp.permission_id
      );
      setEditRoleForm({ name: _role.name, permissionIds: _permissionIds });
      setIsDefaultRole(defaultRoles.includes(_role.name));
    }
  }, [getRoleData]);

  const handleUpdateRole = async () => {
    const objects = editRoleForm.permissionIds.map((permissionId) => {
      return {
        role_id: roleId,
        permission_id: permissionId,
      };
    });
    await updateRole({
      variables: {
        id: roleId,
        name: editRoleForm.name,
        objects: objects,
      },
      context: {
        headers: {
          "x-hasura-role": getPriorityRole(),
        },
      },
    });
    router.replace("/admin/roles");
  };

  const handleSelectedIdsChange = (selectedPermissionIds: number[]) => {
    setEditRoleForm({ ...editRoleForm, permissionIds: selectedPermissionIds });
  };

  return (
    <Card shadow="sm" fullWidth isDisabled={fetching}>
      <CardHeader>
        <h4>Edit Role</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input
          isDisabled={isDefaultRole}
          autoFocus
          isRequired
          type="text"
          variant="faded"
          value={editRoleForm?.name}
          onValueChange={(value) =>
            setEditRoleForm({ ...editRoleForm, name: value })
          }
          label="Name"
          isInvalid={isNameInvalid}
          color={isNameInvalid ? "danger" : "default"}
          errorMessage={isNameInvalid && "Please enter a valid name"}
        />
        <Spacer y={3} />
        <MultiSelectPermission
          defaultSelectedIds={editRoleForm.permissionIds}
          onSelectedIdsChange={handleSelectedIdsChange}
        />
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <Button
          color="primary"
          isDisabled={!editRoleForm?.name}
          isLoading={updating}
          onPress={handleUpdateRole}
        >
          Update
        </Button>
        <Spacer />
        <Button color="default" onPress={() => router.replace("/admin/roles")}>
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
}
