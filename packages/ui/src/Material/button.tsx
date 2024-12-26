import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export function Button({ onClick, children }: PropsWithChildren<Props>) {
  return (
    <button
      className={
        "min-w-[160px] w-full h-12 border-0 bg-blue-500 rounded-lg text-gray-50 hover:bg-blue-300 font-bold active:bg-blue-600"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
