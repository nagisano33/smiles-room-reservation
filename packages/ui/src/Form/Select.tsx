"use client"

import { Select as HeadlessUISelect } from "@headlessui/react";

type Selectable = {
  id: string;
  name: string;
};

type Props = {
  defaultValue: Selectable["id"];
  values: Selectable[];
  onChange?: (value: string) => void;
};

export function Select({ defaultValue, values, onChange = () => {} }: Props) {
  return (
    <HeadlessUISelect
    className={"min-w-[120px] h-10 border-gray-500 border-[1px] rounded-md px-2"}
      defaultValue={defaultValue}
      onChange={(event) => onChange(event.target.value)}
    >
      <option key={""} disabled></option>
      {values.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </HeadlessUISelect>
  );
}
