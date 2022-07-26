import { FC, MouseEvent, ReactNode } from "react";
import "./MyButton.scss"

type ButtonColor = "primary" | "secondary" | "default";

type ButtonSize = "small" | "medium" | "large";

type ButtonVariant = "contained" | "outlined" | "text";


interface IMyButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: ReactNode;
  onClick?:(event:MouseEvent) => void
}

const MyButton: FC<IMyButtonProps> = ({
  color = "primary",
  size = "medium",
  variant = "contained",
  disabled = false,
  children,
  onClick
}) => {

  const handleClick = (e:MouseEvent) => {
    onClick?.(e);
  }

  const constructClassName:()=>string = () => {
    const colorVariantCls = `btn-${color}-${variant}`
    return ["btn", colorVariantCls].join(" ")
  }

  //"btn btn-large"

  return (
    <button onClick={handleClick} className={constructClassName()}>
        <span>{children}</span>
    </button>
  )
}

export default MyButton