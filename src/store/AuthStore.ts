import type { AuthUser } from "@/Features/Auth/@types";
import { getCurrentAuthUser } from "@/Features/Auth/services/getCurrentAuthUser";
import { create } from "zustand";


type State = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
};

type Actions = {
  initAuth: () => Promise<void>;

  setAuthUser: (
    user: AuthUser
  ) => void;

  clearAuth: () => void;
};

export const useAuthStore =
  create<State & Actions>((set) => ({
    user: null,

    isAuthenticated: false,

    isInitialized: false,

    initAuth: async () => {
      try {
        const user =
          await getCurrentAuthUser();

        set({
          user,
          isAuthenticated: !!user,
          isInitialized: true,
        });
      } catch {
        set({
          user: null,
          isAuthenticated: false,
          isInitialized: false,
        });
      }
    },

    setAuthUser: (user) => {
      set({
        user,
        isAuthenticated: true,
        isInitialized:true,
      });
    },

    clearAuth: () => {
      set({
        user: null,
        isAuthenticated: false,
        isInitialized:false
      });
    },
  }));