import useAppUiStore from "@/store/useAppUiStore";
import buttonConfigs from "../config/buttons.config";
import { crudButtons } from "../constants/constants";
import useInvoicesStore from "../store/useInvoicesStore";
import {
  CRUD,
  CustomCrudHandls,
  DefaultCrudHandls,
} from "../types/buttons.types";
import { useShallow } from "zustand/shallow";

const getHandler = <Mode extends keyof CRUD>(
  btnKey: CRUD[Mode],
  defaultHandlers: DefaultCrudHandls[Mode],
  customHandlers?: CustomCrudHandls[Mode],
) =>
  customHandlers?.[btnKey] ? customHandlers[btnKey] : defaultHandlers?.[btnKey];

const useCrudButtons = <Mode extends keyof CRUD>(
  groupKey: Mode,
  customHandlers?: CustomCrudHandls[Mode],
) => {
  const {
    toggleDelPrompt,
    selectedInvoiceId,
    returnHome,
    openForm,
    closeForm,
  } = useAppUiStore(
    useShallow((state) => ({
      toggleDelPrompt: state.toggleDelPrompt,
      selectedInvoiceId: state.selectedInvoiceId,
      returnHome: state.returnHome,
      openForm: state.openForm,
      closeForm: state.closeForm,
    })),
  );
  const { invoices, updateInvStatus, delInvoice } = useInvoicesStore(
    useShallow((state) => ({
      invoices: state.invoices,
      updateInvStatus: state.updateInvStatus,
      delInvoice: state.delInvoice,
    })),
  );
  const selectedInvoice = invoices.find(
    (invoice) => invoice.id === selectedInvoiceId,
  );
  const selectedBtnsGroup = crudButtons[groupKey];

  const defaultHandlers = {
    create: {
      saveAndSend: () => {},
      draft: () => {},
      discard: () => closeForm(),
    },
    read: {
      paid: () => updateInvStatus(selectedInvoiceId, "paid"),
      edit: () => openForm("edit"),
      delete: () => toggleDelPrompt(),
    },
    edit: {
      saveChanges: () => {},
      cancel: () => closeForm(),
    },
    delete: {
      delete: () => {
        delInvoice(selectedInvoiceId);
        toggleDelPrompt();
        returnHome();
      },
      cancel: () => toggleDelPrompt(),
    },
  };

  return selectedBtnsGroup.map((btnKey) => {
    return {
      ...buttonConfigs[btnKey],
      attrbs: {
        ...buttonConfigs[btnKey].attrbs,
        disabled:
          btnKey === "paid" && selectedInvoice?.status === "draft"
            ? true
            : false,
      },
      onClick: getHandler(
        btnKey as CRUD[Mode],
        defaultHandlers[groupKey],
        customHandlers,
      ),
    };
  });
};

export default useCrudButtons;
