import StatusBadge from "./StatusBadge";
import arrowRightIcon from "@/assets/icons/arrow-right-icon.svg";
import type { InvoiceSumCardType } from "../types/invoiceList.types";

const InvoiceSummaryCard = ({
  clientName,
  invoiceId,
  status,
  onClick,
}: InvoiceSumCardType) => {
  return (
    <section
      onClick={onClick}
      className="w-full max-md:max-w-120 bg-surface shadow-surface cursor-pointer
                 rounded-md border-2 border-transparent hover:border-surface-border 
                 grid grid-cols-3 grid-rows-4 md:grid-cols-5 md:grid-rows-1
                 md:items-center px-6 py-6.25">
      <h2
        className="text-text-primary text-body-bold leading-3.75
                   max-md:row-start-1 max-md:row-span-2 md:justify-self-center ">
        <span className="text-[#7e88c3]">#</span>
        {invoiceId}
      </h2>
      <time
        className="text-text-secondary text-body
                   max-md:row-start-3 max-md:row-end-3">
        <span className="text-text-subtle">Due</span> 19 Aug 2021
      </time>
      <p
        className="text-[#858bb2] dark:text-main text-body 
                    max-md:row-start-1 max-md:row-span-2
                    max-md:col-start-3 max-md:col-end-4
                    max-md:justify-self-center">
        {clientName}
      </p>
      <p
        className="text-text-primary text-body-bold leading-6 
                    max-md:row-start-4 max-md:row-end-4 
                    md:justify-self-center">
        £ 1,800.90
      </p>
      <div
        className="flex justify-center items-center gap-5 
                      max-md:row-start-3 max-md:row-span-2
                      max-md:col-start-3 max-md:col-end-4">
        <StatusBadge status={status} />
        <img className="max-md:hidden" src={arrowRightIcon} />
      </div>
    </section>
  );
};

export default InvoiceSummaryCard;
