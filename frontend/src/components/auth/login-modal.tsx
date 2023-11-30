import React, { useEffect, useMemo, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { MdMail, MdLock } from "react-icons/md";
import { gql, useMutation } from "@apollo/client";
import { LoginMutation } from "@/gql/graphql";
import { useAuthStore } from "@/stores/authStore";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";
import {
  ACCESS_TOKEN,
  ADMIN_DASHBOARD_URL,
  REFRESH_ACCESS_TOKEN,
} from "@/utils/constants";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      accessToken
      refreshAccessToken
      address
      birthday
      city
      country
      createdAt
      district
      firstName
      id
      lastName
      phone
      updatedAt
    }
  }
`;

type LoginForm = {
  email: string;
  password: string;
  isRememberMe: boolean;
};

export default function LoginModal() {
  const setLogin = useAuthStore((state) => state.setLogin);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
    isRememberMe: false,
  });

  const [login, { data: loginData, loading, error }] =
    useMutation<LoginMutation>(LOGIN_MUTATION);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = useMemo(() => {
    if (loginForm.email === "") return false;
    return validateEmail(loginForm.email) ? false : true;
  }, [loginForm.email]);

  const isFormInvalid = useMemo(() => {
    return isEmailInvalid || !loginForm.email || !loginForm.password;
  }, [loginForm]);

  const handleLogin = async () => {
    await login({
      variables: {
        email: loginForm.email,
        password: loginForm.password,
      },
    });
  };

  useEffect(() => {
    if (loginData) {
      const { accessToken, refreshAccessToken, ...user } = loginData.login;
      setLogin(user); // Set global state
      setCookie(ACCESS_TOKEN, accessToken);
      setCookie(REFRESH_ACCESS_TOKEN, refreshAccessToken);
      redirect(ADMIN_DASHBOARD_URL);
    }
  }, [loginData]);

  return (
    <Modal defaultOpen isDismissable={false} hideCloseButton backdrop="blur">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            isDisabled={loading}
            endContent={
              <MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Email"
            placeholder="Enter your email"
            variant="faded"
            value={loginForm.email}
            onValueChange={(value) =>
              setLoginForm({ ...loginForm, email: value })
            }
            isInvalid={isEmailInvalid}
            color={isEmailInvalid ? "danger" : "default"}
            errorMessage={isEmailInvalid && "Please enter a valid email"}
          />
          <Input
            isDisabled={loading}
            endContent={
              <MdLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="faded"
            value={loginForm.password}
            onValueChange={(value) =>
              setLoginForm({ ...loginForm, password: value })
            }
          />
          {/* <div className="flex py-2 px-1 justify-between">
            <Checkbox
              className="text-small"
              isSelected={loginForm.isRememberMe}
              onValueChange={(checked) =>
                setLoginForm({ ...loginForm, isRememberMe: checked })
              }
            >
              Remember me
            </Checkbox>
            <Link color="primary" href="#" size="sm">
              Forgot password?
            </Link>
          </div> */}
          <small className="text-danger italic">{error?.message}</small>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            isDisabled={isFormInvalid}
            onClick={handleLogin}
            isLoading={loading}
          >
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
