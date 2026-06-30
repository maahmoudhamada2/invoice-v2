import useAppUiStore from "@/store/useAppUiStore";
import FieldSet from "./components/form/FieldSet";
import ProjectItems from "./components/form/ProjectItems";
import fieldsConfig from "./config/fields.config";
import { FormProvider } from "react-hook-form";
import useFormSetup from "./hooks/useFormSetup";
import ButtonsGroup from "./components/ButtonsGroup";
import Button from "@/components/Button/Button";
import useActionButtons from "./hooks/useSingleButtons";
import FormScrollArea from "./components/form/FormScrollArea";

const InvoiceForm = () => {
  const isEdit = useAppUiStore((state) => state.isEdit);
  const selectedInvoiceId = useAppUiStore((state) => state.selectedInvoiceId);
  const backBtn = useActionButtons("goBack", () => closeForm());
  const { buttons, methods, closeForm, handleSubmition, item } = useFormSetup();
  const {
    formState: { errors },
  } = methods;

  return (
    <div
      onClick={closeForm}
      className="flex flex-col w-full h-full bg-backdrop absolute top-0">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmition}
          className="relative w-full h-full flex flex-col bg-form 
                     md:w-[80%] md:rounded-tr-lg md:rounded-br-lg xl:w-[50%]">
          <FormScrollArea>
            <header className="text-main mb-5.5 flex flex-col items-start gap-6.5 md:mb-11.5 ">
              {!isEdit && <Button {...backBtn} />}
              <h2 className="text-heading text-text-primary">
                {isEdit ? (
                  <>
                    Edit <span className="text-subtle">#</span>
                    {selectedInvoiceId}
                  </>
                ) : (
                  "New Invoice"
                )}
              </h2>
            </header>
            <FieldSet title="Bill From" fields={fieldsConfig.sender} />
            <FieldSet title="Bill To" fields={fieldsConfig.client} />
            <FieldSet fields={fieldsConfig.meta} />
            <ProjectItems {...item} />
            {Object.keys(errors).length !== 0 && (
              <small className="text-field-error text-[#EC5757]">
                - All fields must be added
              </small>
            )}
            <div
              className="w-full h-50 rounded-br-lg absolute bottom-0 -mr-6 -ml-6 
                         bg-linear-to-b from-black/0 to-black/10 pointer-events-none
                         dark:from-black/0 dark:to-black/50 
                         md:-mr-14 md:-ml-14"></div>
          </FormScrollArea>
          <ButtonsGroup
            buttons={buttons}
            style={"bg-white dark:bg-app absolute bottom-0"}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default InvoiceForm;
