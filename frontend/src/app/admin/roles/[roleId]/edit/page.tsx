"use client";

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

const GET_ROLE = gql`
  query getRole($id: smallint!) {
    roles_by_pk(id: $id) {
      id
      name
      created_at
      updated_at
      deleted_at
    }
  }
`;

const UPDATE_ROLE = gql`
  mutation updateRole($id: smallint!, $name: String!) {
    update_roles_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, updated_at: "now()" }
    ) {
      id
    }
  }
`;

type EditRoleForm = {
  name: string;
};

export default function AdminEditRolePage({
  params,
}: {
  params: { roleId: number };
}) {
  const roleId = params.roleId;
  const { getPriorityRole } = useAuthStore((state) => state);
  const router = useRouter();
  const [editRoleForm, setEditRoleForm] = useState<EditRoleForm>();

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
      setEditRoleForm({ ...editRoleForm, name: _role.name });
    }
  }, [getRoleData]);

  const handleUpdateRole = async () => {
    if (editRoleForm) {
      await updateRole({
        variables: {
          id: roleId,
          name: editRoleForm.name,
        },
        context: {
          headers: {
            "x-hasura-role": getPriorityRole(),
          },
        },
      });
      router.replace("/admin/roles");
    }
  };

  return (
    <Card shadow="sm" fullWidth isDisabled={fetching}>
      <CardHeader>
        <h4>Edit Role</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input
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
