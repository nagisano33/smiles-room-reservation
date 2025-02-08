import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Button as CnButton } from "@/components/ui/button.js";

interface BaseButtonProps {
  /**
   * A callback function that is triggered when users click on a button
   */
  onClick?: () => void;

  /**
   * The type of button
   */
  type?: "button" | "submit";

  /**
   * A state which means disabled or not
   */
  disabled?: boolean;

  /**
   * If true, this component will take the full width.
   */
  fullWidth?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  /**
   * A callback function that is triggered when users click on a button
   */
  onClick: () => void;

  /**
   * The type of button
   */
  type?: "button";
}

export interface SubmitButtonProps extends BaseButtonProps {
  /**
   * The type of button
   */
  type?: "submit";
}

/**
 * An abstract button triggers a callback function when users click on this component
 *
 * @param {PropsWithChildren<Props>} props
 * - An object contains a callback function that is triggered when users click on this component,
 *   and some states how to show this component
 *
 * @returns {JSX.Element} A functional component
 */
export function Button({
  disabled,
  fullWidth,
  type = "button",
  onClick = () => {},
  children,
}: PropsWithChildren<ButtonProps | SubmitButtonProps>): JSX.Element {
  return (
    <CnButton
      className={clsx({
        "w-full": fullWidth,
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CnButton>
  );
}
