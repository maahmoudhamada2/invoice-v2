import * as z from "zod";

export const formItemsSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  price: z.number().min(1, { message: "Must be at least 1" }),
  quantity: z.number().min(1, { message: "Must be at least 1" }),
  total: z.number(),
});

const formSchema = z.object({
  senderStreet: z.string().min(1, { message: "Sender street is required" }),
  senderCity: z.string().min(1, { message: "Sender city is required" }),
  senderPostCode: z.string().min(1, { message: "Sender postcode is required" }),
  senderCountry: z.string().min(1, { message: "Sender country is required" }),
  clientName: z.string().min(1, { message: "Client name is required" }),
  clientEmail: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  clientStreet: z.string().min(1, { message: "Client street is required" }),
  clientCity: z.string().min(1, { message: "Client city is required" }),
  clientPostCode: z.string().min(1, { message: "Client postcode is required" }),
  clientCountry: z.string().min(1, { message: "Client country is required" }),

  invoiceDate: z.iso.date({ message: "Invoice date is required" }),
  paymentTerms: z.literal([1, 7, 14, 30], {
    message: "Select payment terms",
  }),
  projectDesc: z
    .string()
    .min(1, { message: "Project description is required" }),
  items: z.array(formItemsSchema),
});

export default formSchema;
