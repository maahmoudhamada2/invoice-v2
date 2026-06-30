import { CRUD } from "../types/buttons.types";
import { FormInput } from "../types/invoiceForm.types";

export const crudButtons = {
  read: ["edit", "delete", "paid"],
  create: ["discard", "draft", "saveAndSend"],
  edit: ["cancel", "saveChanges"],
  delete: ["cancel", "delete"],
} satisfies {
  [Mode in keyof CRUD]: CRUD[Mode][];
};

export const formItemValue = {
  name: "",
  price: 0,
  quantity: 1,
  total: 0,
};
