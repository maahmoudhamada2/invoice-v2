import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InvoiceDataType, InvoiceStatus } from "../types/invoiceList.types";
import { FormSchema } from "../types/invoiceForm.types";
import formDataConverter from "../utils/formDataConverter";

interface InvoicesStoreState {
  invoices: InvoiceDataType[] | [];
  filterStatus: InvoiceStatus | "all";
  createNewInvoice: (formData: FormSchema, createMode: InvoiceStatus) => void;

  filterInvoices: (filterStatus: InvoiceStatus | "all") => void;
  delInvoice: (invoiceId: string | null) => void;
  updateInvoice: (invoiceId: string | null, userInputs: FormSchema) => void;
  updateInvStatus: (
    invoiceId: string | null,
    statValue: "paid" | "pending",
  ) => void;
}

const useInvoicesStore = create<InvoicesStoreState>()(
  persist(
    (set, get) => ({
      invoices: [],
      filterStatus: "all",

      createNewInvoice: (formData, createMode) => {
        const ids = get().invoices.map((invoice) => invoice.id);
        const newInvoice = formDataConverter(
          { isNew: true, isDraft: createMode === "draft", id: null },
          formData,
          ids,
        );
        set((state) => ({
          invoices: [...state.invoices, newInvoice],
        }));
      },

      filterInvoices: (filterStatus) => set({ filterStatus: filterStatus }),

      delInvoice: (invoiceId) =>
        set((state) => ({
          invoices: state.invoices.filter(
            (invoice) => invoice.id !== invoiceId,
          ),
        })),
      updateInvoice: (invoiceId, userInputs) => {
        return set((state) => ({
          invoices: state.invoices.map((invoice) =>
            invoice.id === invoiceId
              ? formDataConverter(
                  {
                    isNew: false,
                    isDraft: invoice.status === "draft",
                    id: invoiceId,
                  },
                  userInputs,
                )
              : invoice,
          ),
        }));
      },
      updateInvStatus: (invoiceId, statValue) =>
        set((state) => ({
          invoices: state.invoices.map((invoice) =>
            invoice.id === invoiceId
              ? ((invoice.status = statValue), invoice)
              : invoice,
          ),
        })),
    }),
    { name: "invoices", partialize: (state) => ({ invoices: state.invoices }) },
  ),
);

export default useInvoicesStore;
