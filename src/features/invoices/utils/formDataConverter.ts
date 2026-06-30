import { FormSchema } from "../types/invoiceForm.types";
import { InvoiceDataType } from "../types/invoiceList.types";
import { itemsPriceCalc, idGenerator } from "./formConvHelpers";
import { addDays, formatISO } from "date-fns";

const formDataConverter = (
  invoiceStatus: {
    isNew: boolean;
    isDraft: boolean;
    id: string | null;
  },
  formData: FormSchema,
  invoiceIds: string[] | [] = [],
) => {
  const createdAt = formData.invoiceDate
    ? new Date(formData.invoiceDate)
    : new Date();

  const newInvoice: InvoiceDataType = {
    ...itemsPriceCalc(formData.items),
    id:
      !invoiceStatus.isNew && invoiceStatus.id
        ? invoiceStatus.id
        : idGenerator(invoiceIds),
    createdAt: formatISO(createdAt, { representation: "date" }),
    paymentDue: formatISO(addDays(createdAt, formData.paymentTerms), {
      representation: "date",
    }),
    description: formData.projectDesc,
    paymentTerms: formData.paymentTerms,
    clientName: formData.clientName,
    clientEmail: formData.clientEmail,
    status: invoiceStatus.isNew && invoiceStatus.isDraft ? "draft" : "pending",
    senderAddress: {
      street: formData.senderStreet,
      city: formData.senderCity,
      postCode: formData.senderPostCode,
      country: formData.senderCountry,
    },
    clientAddress: {
      street: formData.clientStreet,
      city: formData.clientCity,
      postCode: formData.clientPostCode,
      country: formData.clientCountry,
    },
  };
  return newInvoice;
};

export const invoiceToForm = (invoice: InvoiceDataType) => {
  const formData: FormSchema = {
    senderStreet: invoice.senderAddress.street,
    senderCountry: invoice.senderAddress.country,
    senderCity: invoice.senderAddress.city,
    senderPostCode: invoice.senderAddress.postCode,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    clientStreet: invoice.clientAddress.street,
    clientCity: invoice.clientAddress.city,
    clientPostCode: invoice.clientAddress.postCode,
    clientCountry: invoice.clientAddress.country,
    paymentTerms: invoice.paymentTerms as 1 | 7 | 14 | 30,
    projectDesc: invoice.description,
    invoiceDate: invoice.createdAt,
    items: invoice.items,
  };
  return formData;
};

export default formDataConverter;
