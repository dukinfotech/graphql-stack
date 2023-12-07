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

const GET_PERMISSION = gql`
  query getPermission($id: smallint!) {
    permissions_by_pk(id: $id) {
      id
      name
      created_at
      updated_at
    }
  }
`;

const UPDATE_PERMISSION = gql`
  mutation updatePermission($id: smallint!, $name: String!) {
    update_permissions_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, updated_at: "now()" }
    ) {
      id
    }
  }
`;

type EditPermissionForm = {
  name: string;
};

export default function AdminEditPermissionPage({
  params,
}: {
  params: { permissionId: number };
}) {
  const permissionId = params.permissionId;
  const { getPriorityRole } = useAuthStore((state) => state);
  const router = useRouter();
  const [editPermissionForm, setEditPermissionForm] =
    useState<EditPermissionForm>();

  const isNameInvalid = useMemo(() => {
    return editPermissionForm && editPermissionForm.name === "";
  }, [editPermissionForm?.name]);

  const { data: getPermissionData, loading: fetching } = useQuery(
    GET_PERMISSION,
    {
      variables: {
        id: permissionId,
      },
      context: {
        headers: {
          "x-hasura-role": getPriorityRole(),
        },
      },
    }
  );

  const [updatePermission, { loading: updating }] =
    useMutation(UPDATE_PERMISSION);

  useEffect(() => {
    if (getPermissionData) {
      const _permission = getPermissionData.permissions_by_pk;
      setEditPermissionForm({ ...editPermissionForm, name: _permission.name });
    }
  }, [getPermissionData]);

  const handleUpdatePermission = async () => {
    if (editPermissionForm) {
      await updatePermission({
        variables: {
          id: permissionId,
          name: editPermissionForm.name,
        },
        context: {
          headers: {
            "x-hasura-role": getPriorityRole(),
          },
        },
      });
      router.replace("/admin/permissions");
    }
  };

  return (
    <Card shadow="sm" fullWidth isDisabled={fetching}>
      <CardHeader>
        <h4>Edit Permission</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input
          autoFocus
          isRequired
          type="text"
          variant="faded"
          value={editPermissionForm?.name}
          onValueChange={(value) =>
            setEditPermissionForm({ ...editPermissionForm, name: value })
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
          isDisabled={!editPermissionForm?.name}
          isLoading={updating}
          onPress={handleUpdatePermission}
        >
          Update
        </Button>
        <Spacer />
        <Button
          color="default"
          onPress={() => router.replace("/admin/permissions")}
        >
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
}
