import { LoginOutput } from '@/gql/graphql'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = Omit<LoginOutput, 'accessToken' | 'refreshAccessToken'>;

type State = {
  isAuthenticated: boolean,
  user: User | null
}

type Action = {
  setLogin: (user: User) => void,
  setLogout: () => void,
}
export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      setLogin: (user) => set(() => ({ isAuthenticated: true, user })),
      setLogout: () => set(() => ({ isAuthenticated: false, user: null })),
    }),
    {
      name: 'auth-storage',
    }
  )
);