import { InvoiceDataType } from "../types/invoiceList.types";
import InvoiceItem from "./InvoiceItem";
import InvoicesEmptyState from "./InvoicesEmptyState";
import StatusBar from "./StatusBar";

const InvoicesList = ({ invoices }: { invoices: InvoiceDataType[] }) => {
  //   invoices = [];
  return (
    <>
      <StatusBar />
      <div className="flex flex-col items-center gap-4">
        {invoices.length === 0 ? (
          <InvoicesEmptyState />
        ) : (
          invoices.map((invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} isFull={false} />
          ))
        )}
      </div>
    </>
  );
};

export default InvoicesList;
