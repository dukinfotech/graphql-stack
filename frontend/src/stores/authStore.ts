import { LoginOutput } from "@/gql/graphql";
import {
  HASURA_ADMIN_ROLE,
  HASURA_ANONYMOUS_ROLE,
  HASURA_MANAGER_ROLE,
  HASURA_USER_ROLE,
} from "@/utils/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = Omit<
  LoginOutput,
  "__typename" | "accessToken" | "refreshAccessToken"
>;

type State = {
  isAuthenticated: boolean;
  user: User | null;
};

type Action = {
  setLogin: (user: User) => void;
  setLogout: () => void;
  getPriorityRole: () => string;
};

export const useAuthStore = create<State & Action>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      setLogin: (user) => set(() => ({ isAuthenticated: true, user })),
      setLogout: () => set(() => ({ isAuthenticated: false, user: null })),
      getPriorityRole: () => {
        const roles = get().user?.roles;
        if (roles) {
          if (roles.includes(HASURA_ADMIN_ROLE)) {
            return HASURA_ADMIN_ROLE;
          }
          if (roles.includes(HASURA_MANAGER_ROLE)) {
            return HASURA_MANAGER_ROLE;
          }
          if (roles.includes(HASURA_USER_ROLE)) {
            return HASURA_USER_ROLE;
          }
        }
        return HASURA_ANONYMOUS_ROLE;
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
