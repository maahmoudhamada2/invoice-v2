import { useFormContext } from "react-hook-form";
import { get } from "react-hook-form";
import clsx from "clsx";

interface InputPropsType {
  id: string;
  type: string;
  disabled: boolean;
}

const Input = ({ id, type, disabled }: InputPropsType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const fieldError = get(errors, id);

  return (
    <input
      onFocus={(e) =>
        e.target.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      className={clsx(
        `outline-0 caret-brand caret-block bg-surface text-text-primary text-body-bold tracking-[-0.25px] px-5 pt-4.5 pb-3.75 border-2 rounded-xs disabled:text-red-600 `,
        fieldError
          ? "border-danger"
          : "border-input-border focus-visible:border-input-focus",
      )}
      id={id}
      type={type}
      disabled={disabled}
      {...register(id, { valueAsNumber: type === "number" })}
    />
  );
};

export default Input;
