import { FormFieldType } from "../types/invoiceForm.types";

type ConfigFieldsKeys = "sender" | "client" | "meta" | "item";
type ConfigFieldsSchema = Record<ConfigFieldsKeys, FormFieldType[]>;

const fieldsConfig: ConfigFieldsSchema = {
  sender: [
    {
      container: {
        size: "w-full",
      },
      label: {
        text: "Street Address",
      },
      input: {
        id: "senderStreet",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "w-[40%] flex-1",
      },
      label: {
        text: "City",
      },
      input: {
        id: "senderCity",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "w-[40%] flex-1",
      },
      label: {
        text: "Post Code",
      },
      input: {
        id: "senderPostCode",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "flex-1",
      },
      label: {
        text: "Country",
      },
      input: {
        id: "senderCountry",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
  ],
  client: [
    {
      container: { size: "w-full" },
      label: { text: "Client's Name" },
      input: {
        id: "clientName",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "w-full",
      },
      label: {
        text: "Client's Email",
      },
      input: {
        id: "clientEmail",
        type: "email",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "w-full",
      },
      label: {
        text: "Street Address",
      },
      input: {
        id: "clientStreet",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "w-[40%] flex-1",
      },
      label: {
        text: "City",
      },
      input: {
        id: "clientCity",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "w-[40%] flex-1",
      },
      label: {
        text: "Post Code",
      },
      input: {
        id: "clientPostCode",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "flex-1",
      },
      label: {
        text: "Country",
      },
      input: {
        id: "clientCountry",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
  ],
  meta: [
    {
      container: {
        size: "w-full md:w-[45%] md:flex-1",
      },
      label: { text: "Invoice Date" },
      input: {
        id: "invoiceDate",
        type: "date",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: { size: "w-full md:w-[45%] md:flex-1" },
      label: { text: "Payment Terms" },
      input: {
        id: "paymentTerms",
        type: "select",
        disabled: false,
        value: undefined,
        options: {
          type: "number",
          data: [
            { label: "Net 1 Day", value: 1 },
            { label: "Net 7 Days", value: 7 },
            { label: "Net 14 Days", value: 14 },
            { label: "Net 30 Days", value: 30 },
          ],
        },
      },
    },
    {
      container: { size: "w-full" },
      label: { text: "Project Description" },
      input: {
        id: "projectDesc",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
  ],
  item: [
    {
      container: {
        size: "w-full",
      },
      label: {
        text: "Item Name",
      },
      input: {
        id: "name",
        type: "text",
        disabled: false,
        value: undefined,
      },
    },
    {
      container: {
        size: "w-[20%]",
      },
      label: {
        text: "Qty.",
      },
      input: {
        id: "quantity",
        type: "number",
        disabled: false,
        value: 1,
      },
    },
    {
      container: {
        size: "w-[30%]",
      },
      label: {
        text: "Price",
      },
      input: {
        id: "price",
        type: "number",
        disabled: false,
        value: 0,
      },
    },
    {
      container: {
        size: "w-[18%]",
      },
      label: {
        text: "Total",
      },
      input: {
        id: "total",
        type: "number",
        disabled: true,
        value: 0,
      },
    },
  ],
};

export default fieldsConfig;
