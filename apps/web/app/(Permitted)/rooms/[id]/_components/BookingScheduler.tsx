"use client"

import { Button, type ButtonProps } from "@repo/ui/Material/button";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

type Props = ButtonProps;

/**
 * A component that allows users to select the time to book a room
 * 
 * @param {ButtonProps} props {@see {@link ButtonProps}}
 * @returns {JSX.Element} A functional component
 */
export function BookingScheduler({ onClick, disabled }: Props): JSX.Element {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <div className="w-full h-full grid place-items-center">
        {disabled ? (
          <ImCross size={"1.5em"} />
        ) : (
          <FaRegCircle size={"1.5em"} />
        )}
      </div>
    </Button>
  );
}
