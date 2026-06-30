import TextSection from "./TextSection";
import StatusBadge from "../StatusBadge";
import AddressItem from "./AddressItem";
import { InvoiceDataType } from "../../types/invoiceList.types";
import ItemsContainer from "./ItemsContainer";
import ButtonsGroup from "../ButtonsGroup";
import DeletePrompt from "./DeletePrompt";
import useAppUiStore from "@/store/useAppUiStore";
import { format } from "date-fns";
import useCrudButtons from "../../hooks/useCrudButtons";
import useActionButtons from "../../hooks/useSingleButtons";
import Button from "@/components/Button/Button";

const DetailsCard = ({ invoice }: { invoice: InvoiceDataType }) => {
  const returnHome = useAppUiStore((state) => state.returnHome);
  const isDelPrompt = useAppUiStore((state) => state.isDelPrompt);
  const readBtns = useCrudButtons("read");
  const backButton = useActionButtons("goBack", () => returnHome());
  return (
    <>
      <div className="flex flex-col gap-6 md:pb-33.75 xl:pb-13.5">
        <header className="bg-surface shadow-surface flex flex-col gap-7.75">
          <Button {...backButton} />
          <div className="flex w-full  rounded-md">
            <div className="w-full p-6 pb-6.75 rounded-md  flex items-baseline max-md:justify-between md:gap-5  ">
              <p className="text-[#858BB2] text-body">Status</p>
              <StatusBadge status={invoice.status} />
            </div>
            <ButtonsGroup buttons={readBtns} />
          </div>
        </header>
        <div
          className="bg-surface shadow-surface p-6 rounded-md flex flex-col gap-y-7.75 
                       md:px-8">
          <div className="flex flex-col gap-7.5 md:flex-row md:justify-between">
            <TextSection
              heading={invoice.id}
              subHeading={invoice.description}
              gapSize={"sm"}
              isId={true}
            />
            <AddressItem {...invoice.senderAddress} />
          </div>
          <div className="flex flex-wrap justify-betwee gap-x-[clamp(16px,18vw,200px)] gap-y-8">
            <div className="flex flex-col justify-between">
              <TextSection
                heading="Invoice Date"
                subHeading={format(new Date(invoice.createdAt), "dd MMM yyyy")}
                gapSize="lg"
                isDate={true}
              />
              <TextSection
                heading="Payment Due"
                subHeading={format(new Date(invoice.paymentDue), "dd MMM yyyy")}
                gapSize="lg"
                isDate={true}
              />
            </div>
            <div className="flex flex-col gap-1.75">
              <TextSection
                heading="Bill To"
                subHeading={invoice.clientName}
                gapSize="lg"
              />
              <AddressItem {...invoice.clientAddress} />
            </div>

            <TextSection
              heading="Sent to"
              subHeading={invoice.clientEmail}
              gapSize="lg"
            />
          </div>
          {invoice.items.length != 0 && (
            <ItemsContainer
              key={`Items-${invoice.id}`}
              items={invoice.items}
              total={invoice.total}
            />
          )}
        </div>
        <div className="w-full h-35 md:hidden"></div>
      </div>
      {isDelPrompt && <DeletePrompt />}
    </>
  );
};

export default DetailsCard;
