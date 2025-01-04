import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Button as CnButton } from "@/components/ui/button.js";

export type ButtonProps = {
  /**
   * A callback function that is triggered when users click on a button
   */
  onClick: () => void;

  /**
   * A state which means disabled or not
   */
  disabled?: boolean;

  /**
   * If true, this component will take the full width.
   */
  fullWidth?: boolean;
};

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
  onClick,
  disabled,
  fullWidth,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <CnButton
      className={clsx({
        "w-full": fullWidth,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CnButton>
  );
}
