import React, { useMemo, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { MdMail, MdLock } from "react-icons/md";

type LoginForm = {
  email: string;
  password: string;
  isRememberMe: boolean;
};

export default function LoginModal() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
    isRememberMe: false,
  });

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = useMemo(() => {
    if (loginForm.email === "") return false;
    return validateEmail(loginForm.email) ? false : true;
  }, [loginForm.email]);

  const isFormInvalid = useMemo(() => {
    return isEmailInvalid || !loginForm.email || !loginForm.password;
  }, [loginForm]);

  return (
    <Modal defaultOpen isDismissable={false} hideCloseButton backdrop="blur">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
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
          <div className="flex py-2 px-1 justify-between">
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
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" isDisabled={isFormInvalid}>
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
