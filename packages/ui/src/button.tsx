import { PropsWithChildren } from "react";

type Props = {
  onClick: () => void;
};

export function Button({ onClick, children }: PropsWithChildren<Props>) {
  return (
    <button className={"min-w-[160px] h-12 border-0 bg-blue-400 rounded-sm"} onClick={onClick}>
      {children}
    </button>
  );
}
