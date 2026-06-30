import dateTimeFormatter from "./dateTimeFormatter";
import { FormItemsSchema } from "../types/invoiceForm.types";

export const idGenerator = (ids: string[]) => {
  let id = "";
  let flag = true;
  while (flag) {
    const randomNum = Math.floor(Math.random() * (9999 - 1000) + 1000);
    const charOne = String.fromCharCode(Math.random() * (89 - 65) + 65);
    const charTwo = String.fromCharCode(Math.random() * (89 - 65) + 65);
    id = `${charOne}${charTwo}${randomNum}`;
    flag = ids.includes(id);
  }
  return id;
};

export const invDatesFormatter = (
  invoiceDate: string,
  paymentTerms: number,
) => {
  const createdAt = dateTimeFormatter(new Date(invoiceDate).toString());
  const createdAtClone = new Date(invoiceDate);
  const days = createdAtClone.getDate();
  const paymentDue = dateTimeFormatter(
    new Date(createdAtClone.setDate(days + paymentTerms)).toString(),
  );
  return { createdAt, paymentDue };
};

export const itemsPriceCalc = (items: FormItemsSchema) => {
  let grandTotal = 0;
  const calcedItems = items.map((item) => {
    const total = item.price * item.quantity;
    grandTotal += total;
    return { ...item, total };
  });
  return { total: grandTotal, items: calcedItems };
};
