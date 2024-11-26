import { create } from "zustand";

const useChatStateStore = create((set) => ({
  chatState: "none",
  setChatState: (chatState: string) => set({ chatState }),
}));

export default useChatStateStore;
