import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  showMemberProfile: false,
  showMatterDetails: false,
  setShowMemberProfile: (value) => set({ showMemberProfile: value }),
  setShowMatterDetails: (value) => set({ showMatterDetails: value }),
}));
