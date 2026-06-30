import InvoiceItem from "./components/InvoiceItem";
import StatusBadge from "./components/StatusBadge";
import { InvoiceDataType } from "./types/invoiceList.types";
import arrowLeft from "@/assets/icons/arrow-left-icon.svg";

const invoice: InvoiceDataType = {
  id: "XM9141",
  createdAt: "2021-08-21",
  paymentDue: "2021-09-20",
  description: "Graphic Design",
  paymentTerms: 30,
  clientName: "Alex Grim",
  clientEmail: "alexgrim@mail.com",
  status: "pending",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "84 Church Way",
    city: "Bradford",
    postCode: "BD1 9PB",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Banner Design",
      quantity: 1,
      price: 156.0,
      total: 156.0,
    },
    {
      name: "Email Design",
      quantity: 2,
      price: 200.0,
      total: 400.0,
    },
  ],
  total: 556.0,
};

const DetailedInvoice = () => {
  return (
    <div className="w-full h-full bg-red-600 flex flex-col px-[24px] pt-[33px]">
      <header className="bg-blue-700">
        <button>Go Back</button>
        <div className="bg-amber-800 flex ">
          <p>Status</p>
          <StatusBadge status="pending" />
        </div>
      </header>
    </div>
  );
};

export default DetailedInvoice;
