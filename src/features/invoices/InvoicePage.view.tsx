import useAppUiStore from "@/store/useAppUiStore";
import InvoicesList from "./components/InvoicesList";
import useInvoicesStore from "./store/useInvoicesStore";
import InvoiceItem from "./components/InvoiceItem";

const InvoicePage = () => {
  const invoices = useInvoicesStore((state) => state.invoices);
  const filterStatus = useInvoicesStore((state) => state.filterStatus);
  const isList = useAppUiStore((state) => state.isList);
  const selectedInvoiceId = useAppUiStore((state) => state.selectedInvoiceId);

  const selectedInvoice = invoices.find((inv) => inv.id === selectedInvoiceId);
  return (
    <div className=" h-full flex flex-col px-6 pt-8 pb-26.25 gap-8 xl:px-63">
      {isList ? (
        <InvoicesList
          invoices={
            filterStatus === "all"
              ? invoices
              : invoices.filter((invoice) => invoice.status === filterStatus)
          }
        />
      ) : (
        selectedInvoice && (
          <InvoiceItem invoice={selectedInvoice} isFull={true} />
        )
      )}
    </div>
  );
};

export default InvoicePage;
