import useAppUiStore from "@/store/useAppUiStore";
import buttonConfigs from "../config/buttons.config";
import { ActionKeys, ActionBtnHandls } from "../types/buttons.types";

const useActionButtons = (btnKey: ActionKeys, customHandler?: () => void) => {
  const openForm = useAppUiStore((state) => state.openForm);

  const defaultHandlers: ActionBtnHandls = {
    newInvoice: () => openForm("create"),
    addItem: () => {},
    goBack: () => {},
  };
  return {
    ...buttonConfigs[btnKey],
    onClick: customHandler ?? defaultHandlers?.[btnKey],
  };
};

export default useActionButtons;
