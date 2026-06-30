import { VariantKeys } from "./button.types";
import getButtonStyle from "./button.style";
import clsx from "clsx";

interface ButtonProps {
  content?: {
    defaultTxt: string;
    altTxt?: string;
  };
  attrbs: {
    type: "submit" | "button" | "reset";
    variant: VariantKeys;
    icon?: string;
    disabled: boolean;
  };
  onClick: () => void;
}

const Button = ({ content, attrbs, onClick }: ButtonProps) => {
  return (
    <button
      type={attrbs.type}
      disabled={attrbs.disabled}
      onClick={onClick}
      className={getButtonStyle(attrbs.variant, Boolean(attrbs.icon))}>
      {attrbs.icon && (
        <div className="flex justify-center items-center bg-white w-8 aspect-square rounded-full">
          <img src={attrbs.icon} />
        </div>
      )}

      {content && (
        <>
          <span className={clsx(content.altTxt && `max-md:hidden`)}>
            {content.defaultTxt}
          </span>
          {content.altTxt && (
            <span className="md:hidden">{content.altTxt}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
