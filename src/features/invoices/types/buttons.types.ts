import { VariantKeys } from "@/components/Button/button.types";

export type ButtonShape = {
  content?: { defaultTxt: string; altTxt?: string };
  attrbs: {
    type: "button" | "submit" | "reset";
    disabled: boolean;
    variant: VariantKeys;
    icon?: string;
  };
};

export type CRUD = {
  read: "paid" | "delete" | "edit";
  create: "saveAndSend" | "draft" | "discard";
  edit: "saveChanges" | "cancel";
  delete: "delete" | "cancel";
};

export type CrudKeys = CRUD[keyof CRUD];
export type ActionKeys = "newInvoice" | "addItem" | "goBack";
export type ButtonKeys = CrudKeys | ActionKeys | "delItem";

export type DefaultCrudHandls = {
  [Mode in keyof CRUD]: {
    [Button in CRUD[Mode]]: () => void;
  };
};

export type CustomCrudHandls = {
  [Mode in keyof CRUD]?: {
    [Button in CRUD[Mode]]?: () => void;
  };
};

export type ActionBtnHandls = {
  [Button in ActionKeys]: () => void;
};
