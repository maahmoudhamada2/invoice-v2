import { create } from "zustand";
import { persist } from "zustand/middleware";

type View = "invoices" | "form" | "details";

interface AppUiState {
  theme: "light" | "dark";
  view: View;
  isList: boolean;
  isDelPrompt: boolean;
  selectedInvoiceId: string | null;
  isOpenForm: boolean;
  isEdit: boolean;
  openForm: (formMode: "create" | "edit") => void;
  closeForm: () => void;
  returnHome: () => void;
  showInvoice: (invoiceId: string) => void;
  toggleDelPrompt: () => void;
  toggleDarkMode: () => void;
}

const useAppUiStore = create<AppUiState>()(
  persist(
    (set, get) => ({
      view: "invoices",
      isList: true,
      isDelPrompt: false,
      selectedInvoiceId: null,
      isOpenForm: false,
      isEdit: false,
      theme: "light",

      openForm: (formMode) =>
        set({ isEdit: formMode === "edit", isOpenForm: true }),
      closeForm: () => set({ isOpenForm: false }),
      returnHome: () => set({ isList: true, view: "invoices" }),
      showInvoice: (invoiceId) => {
        console.log(`DEBUG - AppUi - store - invoiceId = `, invoiceId);
        set({ isList: false, selectedInvoiceId: invoiceId });
      },
      toggleDelPrompt: () =>
        set((state) => ({ isDelPrompt: !state.isDelPrompt })),
      toggleDarkMode: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    { name: "theme", partialize: (state) => ({ theme: state.theme }) },
  ),
);
export default useAppUiStore;
