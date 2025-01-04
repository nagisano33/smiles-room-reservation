import { Description as HeadlessUIDescription } from "@headlessui/react";

export function Description({ children }: React.PropsWithChildren<unknown>) {
  return <HeadlessUIDescription>{children}</HeadlessUIDescription>;
}
