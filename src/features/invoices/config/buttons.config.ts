import { ButtonShape, ButtonKeys } from "../types/buttons.types";
import plusIcon from "@/assets/icons/plus-icon.svg";
import arrowLeft from "@/assets/icons/arrow-left-icon.svg";
import deleteIcon from "@/assets/icons/delete-icon.svg";

const buttonConfigs: Record<ButtonKeys, ButtonShape> = {
  goBack: {
    content: { defaultTxt: "Go back" },
    attrbs: {
      type: "button",
      variant: "back",
      disabled: false,
      icon: arrowLeft,
    },
  },
  newInvoice: {
    content: {
      defaultTxt: "New Invoice",
      altTxt: "New",
    },
    attrbs: {
      variant: "primary",
      type: "button",
      disabled: false,
      icon: plusIcon,
    },
  },
  paid: {
    content: {
      defaultTxt: "Mark as Paid",
    },
    attrbs: {
      variant: "primary",
      type: "button",
      disabled: false,
    },
  },
  draft: {
    content: {
      defaultTxt: "Save as Draft",
    },
    attrbs: {
      variant: "secondary",
      type: "button",
      disabled: false,
    },
  },
  delete: {
    content: {
      defaultTxt: "Delete",
    },
    attrbs: {
      variant: "danger",
      type: "button",
      disabled: false,
    },
  },
  edit: {
    content: {
      defaultTxt: "Edit",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
      disabled: false,
    },
  },
  discard: {
    content: {
      defaultTxt: "Discard",
    },
    attrbs: {
      variant: "ghost",
      type: "reset",
      disabled: false,
    },
  },
  saveAndSend: {
    content: {
      defaultTxt: "Save & Send",
    },
    attrbs: {
      variant: "primary",
      type: "submit",
      disabled: false,
    },
  },
  saveChanges: {
    content: {
      defaultTxt: "Save Changes",
    },
    attrbs: {
      variant: "primary",
      type: "submit",
      disabled: false,
    },
  },
  cancel: {
    content: {
      defaultTxt: "Cancel",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
      disabled: false,
    },
  },
  addItem: {
    content: {
      defaultTxt: "+ Add New Item",
    },
    attrbs: {
      variant: "ghost",
      type: "button",
      disabled: false,
    },
  },
  delItem: {
    attrbs: {
      type: "button",
      variant: "icon",
      disabled: false,
      icon: deleteIcon,
    },
  },
};

export default buttonConfigs;
