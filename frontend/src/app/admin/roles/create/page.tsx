"use client";

import { useAuthStore } from "@/stores/authStore";
import { gql, useMutation } from "@apollo/client";
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
import { useMemo, useState } from "react";

const CREATE_ROLE = gql`
  mutation createRole($name: String!) {
    insert_roles_one(
      object: { name: $name, created_at: "now()", updated_at: "now()" }
    ) {
      id
    }
  }
`;

type CreateRoleForm = {
  name: string;
};

export default function AdminCreateRolePage() {
  const { getPriorityRole } = useAuthStore();
  const router = useRouter();
  const [createRoleForm, setCreateRoleForm] = useState<CreateRoleForm>();

  const isNameInvalid = useMemo(() => {
    return createRoleForm && createRoleForm.name === "";
  }, [createRoleForm?.name]);

  const [createRole, { loading: creating }] = useMutation(CREATE_ROLE);

  const handleCreateRole = async () => {
    if (createRoleForm) {
      await createRole({
        variables: {
          name: createRoleForm.name,
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
    <Card shadow="sm" fullWidth>
      <CardHeader>
        <h4>Create Role</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input
          autoFocus
          isRequired
          type="text"
          variant="faded"
          value={createRoleForm?.name}
          onValueChange={(value) =>
            setCreateRoleForm({ ...createRoleForm, name: value })
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
          isDisabled={!createRoleForm?.name}
          isLoading={creating}
          onPress={handleCreateRole}
        >
          Create
        </Button>
        <Spacer />
        <Button color="default" onPress={() => router.replace("/admin/roles")}>
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
}
