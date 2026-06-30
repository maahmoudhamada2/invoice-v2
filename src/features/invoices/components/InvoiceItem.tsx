import useAppUiStore from "@/store/useAppUiStore";
import { InvoiceDataType } from "../types/invoiceList.types";
import DetailsCard from "./details/DetailsCard";
import InvoiceSummaryCard from "./InvoiceSummaryCard";

const InvoiceItem = ({
  invoice,
  isFull,
}: {
  invoice: InvoiceDataType;
  isFull: boolean;
}) => {
  const showInvoice = useAppUiStore((state) => state.showInvoice);
  const onClick = () => {
    showInvoice(invoice.id);
  };
  return (
    <>
      {isFull ? (
        <DetailsCard invoice={invoice} />
      ) : (
        <InvoiceSummaryCard
          key={invoice.id}
          clientName={invoice.clientName}
          invoiceId={invoice.id}
          status={invoice.status}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default InvoiceItem;
