"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { DarkModeSwitch } from "./darkmodeswitch";
import { useAuthStore } from "@/stores/authStore";
import { redirect } from "next/navigation";
import { Key } from "@react-types/shared";
import { gql, useMutation } from "@apollo/client";
import { LogoutMutation } from "@/gql/graphql";
import { deleteCookie } from "cookies-next";

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;

export const UserDropdown = () => {
  const { user, setLogout } = useAuthStore((state) => state);

  const [logout, { data: logoutData }] = useMutation<LogoutMutation>(LOGOUT_MUTATION);

  const handleClickItem = async (actionKey: Key) => {
    if (actionKey.toString() === 'logout') {
      logout();
    }
  }

  useEffect(() => {
    if (logoutData && logoutData.logout) {
      setLogout();
      deleteCookie("accessToken");
      deleteCookie("refreshAccessToken");
      redirect('/login');
    }
  }, [logoutData]);

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            color="secondary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => handleClickItem(actionKey)}
      >
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Signed in as</p>
          <p>{user?.firstName + ' ' + user?.lastName}</p>
        </DropdownItem>
        <DropdownItem key="logout" color="danger" className="text-danger">
          Log Out
        </DropdownItem>
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
