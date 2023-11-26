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
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { GetSelfQuery, LogoutMutation } from "@/gql/graphql";
import { deleteCookie } from "cookies-next";

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout
  }
`;

const GET_SELF_QUERY = gql`
  query getSelf {
    getSelf {
      address
      birthday
      city
      country
      updatedAt
      phone
      lastName
      id
      firstName
      district
      createdAt
    }
  }
`

export const UserDropdown = () => {
  const { isAuthenticated, user, setLogin, setLogout } = useAuthStore((state) => state);
  const [getSelf, { data: getSelfData }] = useLazyQuery<GetSelfQuery>(GET_SELF_QUERY);
  const [logout, { data: logoutData }] = useMutation<LogoutMutation>(LOGOUT_MUTATION);

  const handleClickItem = async (actionKey: Key) => {
    if (actionKey.toString() === 'logout') {
      logout();
    }
  }

  // Refretch user info if deleted localstorage but access token still exist
  useEffect(() => {
    if (!isAuthenticated) {
      getSelf();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (getSelfData) {
      const { __typename, ...user } = getSelfData.getSelf;
      setLogin(user);
    }
  }, [getSelfData]);

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
