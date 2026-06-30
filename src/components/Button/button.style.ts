import clsx from "clsx";
import type { VariantKeys } from "./button.types";

export const btnsVariant = {
  primary: `bg-brand text-white hover:bg-brand-hover`,
  secondary: `bg-neutral text-text-subtle hover:bg-neutral-hover`,
  danger: `bg-danger text-white hover:bg-danger-hover`,
  ghost: `bg-ghost text-text-secondary hover:bg-ghost-hover hover:text-ghost-text-hover`,
  back: `text-text-primary text-body-bold hover:text-text-muted md:hidden`,
  icon: ``,
};

const getButtonStyle = (variant: VariantKeys, withIcon: boolean) => {
  const base = clsx(
    "cursor-pointer text-body leading-[15px] rounded-xl disabled:opacity-50 disabled:cursor-no-drop",
    withIcon
      ? "flex items-center gap-2 p-1.5 pr-3.75 md:px-2 md:pr-4.25"
      : "px-[clamp(14px,10vw,16px)] pt-4.5 pb-3.75",
  );
  return `${base} ${btnsVariant[variant]}`;
};

export default getButtonStyle;
