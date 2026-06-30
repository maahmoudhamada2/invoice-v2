import Button from "@/components/Button/Button";
import fieldsConfig from "../../config/fields.config";
import FieldSet from "./FieldSet";
import buttonsConfig from "../../config/buttons.config";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { FormInput, FormItemsSchema } from "../../types/invoiceForm.types";
import useActionButtons from "../../hooks/useSingleButtons";
import { formItemValue } from "../../constants/constants";
import { useEffect } from "react";

interface ProjectItemsProps {
  fields: FieldArrayWithId<FormInput, "items", "id">[];
  append: UseFieldArrayAppend<FormInput, "items">;
  remove: UseFieldArrayRemove;
}

const ProjectItems = ({ fields, append, remove }: ProjectItemsProps) => {
  const addItemBtn = useActionButtons("addItem", () => append(formItemValue));
  const { setValue } = useFormContext();

  const items: FormItemsSchema = useWatch({ name: "items" });

  useEffect(() => {
    items?.forEach((item, idx) => {
      const total = (item.price || 0) * (item.quantity || 0);
      if (item.total !== total) setValue(`items.${idx}.total`, total);
    });
  }, [items]);

  return (
    <div className="flex flex-col pb-6">
      <h2 className="mb-5.5 text-[#777f87] font-bold text-[18px]">Item List</h2>
      {fields.map((field, idx) => (
        <FieldSet
          key={field.id}
          fields={fieldsConfig.item}
          idPrefix={`items.${idx}.`}>
          <Button {...buttonsConfig.delItem} onClick={() => remove(idx)} />
        </FieldSet>
      ))}
      <Button {...addItemBtn} />
    </div>
  );
};

export default ProjectItems;
