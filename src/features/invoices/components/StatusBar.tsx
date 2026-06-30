import Button from "../../../components/Button/Button";
import Filters from "./Filters";
import useInvoicesStore from "../store/useInvoicesStore";
import useActionButtons from "../hooks/useSingleButtons";

const invoiceCounter = (status: string, invCount: number) => {
  const isAll = status === "all";
  const mainText =
    invCount === 0
      ? `No ${!isAll ? status : ""} invoices`
      : `There ${invCount === 1 ? "is" : "are"} ${invCount} 
      ${isAll ? "total" : ""} 
      ${!isAll ? status : ""}
      invoice${invCount > 1 ? "s" : ""}`;

  const altText = `
    ${invCount === 0 ? "No" : invCount}
    ${!isAll ? status : ""}
    invoice${invCount > 1 || invCount === 0 ? "s" : ""}`;
  return { mainText, altText };
};

const StatusBar = () => {
  const invoices = useInvoicesStore((state) => state.invoices);
  const filterStatus = useInvoicesStore((state) => state.filterStatus);
  const newInvoiceBtn = useActionButtons("newInvoice");

  const filteredInvoices = invoices.filter((invoice) =>
    filterStatus === "all" ? true : invoice.status === filterStatus,
  );
  const invCount = filteredInvoices.length;
  const { mainText, altText } = invoiceCounter(filterStatus, invCount);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-0.75 md:gap-1.5">
        <h1 className="text-text-primary text-heading">Invoices</h1>
        <p className="text-body text-text-subtle">
          <span className="max-md:hidden">{mainText}</span>
          <span className="md:hidden">{altText}</span>
        </p>
      </div>
      <div className="flex items-center gap-10">
        <Filters />
        <Button {...newInvoiceBtn} />
      </div>
    </div>
  );
};

export default StatusBar;
