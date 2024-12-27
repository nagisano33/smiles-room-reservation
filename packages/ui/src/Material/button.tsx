import { PropsWithChildren } from "react";

export type ButtonProps = {
  /**
   * A callback function that is triggered when users click on a button
   */
  onClick: () => void;

  /**
   * A state which means disabled or not
   */
  disabled?: boolean;
};

/**
 * An abstract button triggers a callback function when users click on this component
 *
 * @param {PropsWithChildren<Props>} props
 * - An object contains a callback function that is triggered when users click on this component
 *   and a state of this component which means disabled or not
 *
 * @returns {JSX.Element} A functional component
 */
export function Button({
  onClick,
  disabled,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <button
      className="
        min-w-[160px] w-full h-12 border-0 bg-blue-500 rounded-lg text-gray-50 font-bold 
        hover:bg-blue-300 
        active:bg-blue-600 
        disabled:bg-blue-100 disabled:text-blue-400
      "
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
