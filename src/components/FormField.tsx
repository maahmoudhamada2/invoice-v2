import { useFormContext } from "react-hook-form";
import Input from "./Input";
import { get } from "react-hook-form";
import clsx from "clsx";
import { FormFieldType } from "@/features/invoices/types/invoiceForm.types";
import useAppUiStore from "@/store/useAppUiStore";
import Select from "./Select";

interface FormFieldProps {
  field: FormFieldType;
  idPrefix?: string;
}

const FormField = ({ field, idPrefix }: FormFieldProps) => {
  const isEdit = useAppUiStore((state) => state.isEdit);
  const {
    formState: { errors },
  } = useFormContext();
  const inputId = idPrefix ? `${idPrefix}${field.input.id}` : field.input.id;
  const fieldError = get(errors, inputId);
  return (
    <div
      className={`relative flex flex-col gap-y-2.25 ${field.container.size}`}>
      <label
        className={clsx(
          `text-body`,
          fieldError ? "text-danger" : "text-text-muted",
        )}
        htmlFor={inputId}>
        {field.label.text}
      </label>
      {field.input.type !== "select" ? (
        <Input
          {...field.input}
          id={inputId}
          disabled={isEdit && field.input.type === "date"}
        />
      ) : (
        field.input.options && (
          <Select
            id={inputId}
            optType={field.input.options.type}
            options={field.input.options.data}
          />
        )
      )}
      {fieldError && (
        <small className="text-field-error text-danger md:absolute md:top-0 md:right-3">
          {fieldError.message}
        </small>
      )}
    </div>
  );
};

export default FormField;
