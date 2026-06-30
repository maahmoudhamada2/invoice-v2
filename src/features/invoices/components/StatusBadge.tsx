import letterCapitalizer from "../utils/letterCapitalizer";
import type { InvoiceStatus } from "../types/invoiceList.types";

const colors = {
  paid: {
    div: "before:bg-status-paid text-status-paid",
    span: "bg-[#33d69f]",
  },
  pending: {
    div: "before:bg-status-pending text-status-pending",
    span: "bg-[#ff8f00]",
  },
  draft: {
    div: "before:bg-status-draft text-status-draft",
    span: "bg-status-draft",
  },
};

const StatusBadge = ({ status }: { status: InvoiceStatus }) => {
  return (
    <div
      className={`${colors[status].div} flex justify-center items-center gap-2 
                  relative px-7.5 pt-3.5 pb-2.75 rounded-sm 
                     before:w-full before:h-full before:absolute before:top-0
                     before:left-0 before:opacity-[5.71%] 
                     before:rounded-sm`}>
      <span
        className={`${colors[status].span} block w-2 h-2 rounded-full`}></span>
      <p className={`text-body-bold leading-3.75`}>
        {letterCapitalizer(status)}
      </p>
    </div>
  );
};

export default StatusBadge;
