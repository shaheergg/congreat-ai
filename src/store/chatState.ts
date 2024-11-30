import { create } from "zustand";

const useChatStateStore = create((set) => ({
  chatState: "none",
  message: "",
  setChatState: (chatState: string) => set({ chatState }),
  setMessage: (message: string) => set({ message }),
}));

export default useChatStateStore;
