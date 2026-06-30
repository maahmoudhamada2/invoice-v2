import Button from "@/components/Button/Button";
import { ButtonShape } from "../types/buttons.types";

interface ButtonsGrpProps {
  buttons: (ButtonShape & { onClick: () => void })[];
  style?: string;
}

const ButtonsGroup = ({ buttons, style }: ButtonsGrpProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${style} w-full flex justify-end gap-1.75 px-6 py-5.5 
                  md:py-7.75 md:px-14.5  md:rounded-tr-lg md:rounded-br-lg`}>
      {buttons.map((button, idx) => (
        <Button key={`btn-${idx + 1}`} {...button} />
      ))}
    </div>
  );
};
export default ButtonsGroup;
