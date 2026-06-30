import formSchema, { formItemsSchema } from "../schema/form.schema";
import * as z from "zod";

export type FormSchema = z.infer<typeof formSchema>;
export type FormItemsSchema = z.infer<typeof formItemsSchema>[];
export type FormInput = z.input<typeof formSchema>;
export type FormOutput = z.output<typeof formSchema>;

export type FieldsSchema = Omit<FormSchema, "items"> &
  z.infer<typeof formItemsSchema>;

export type PaymentTerms = 1 | 7 | 14 | 30;

type FieldTypeConstr<Type> = {
  [Key in keyof Type]: {
    container: {
      size: string;
    };
    label: {
      text: string;
    };
    input: {
      id: Key;
      disabled: boolean;
      value: Type[Key] | undefined;
      type: "text" | "number" | "date" | "email" | "select";
      options?: {
        type: "number" | "string";
        data: { label: string; value: PaymentTerms }[];
      };
    };
  };
}[keyof Type];

export type FormFieldType = FieldTypeConstr<FieldsSchema>;
