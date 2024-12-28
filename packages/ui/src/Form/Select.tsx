"use client";

import { Select as HeadlessUISelect } from "@headlessui/react";

export type SelectProps = {
  defaultValue?: string | number | readonly string[];
  onChange?: (value: string) => void;
  onBlur?: () => void;
  children: JSX.Element
};

export function Select({
  defaultValue,
  onChange = () => {},
  onBlur,
  children,
}: SelectProps) {
  return (
    <HeadlessUISelect
      className={
        "min-w-[120px] h-10 border-gray-500 border-[1px] rounded-md px-2"
      }
      defaultValue={defaultValue}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur}
    >
      <option key={""} disabled></option>
      {children}
    </HeadlessUISelect>
  );
}