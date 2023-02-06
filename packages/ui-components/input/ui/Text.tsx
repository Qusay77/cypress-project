import handleInputChange from "../logic/handleInputChange";
import { InputProps } from "../types";
import { Input } from "../styles";
import { ChangeEvent } from "react";

export default function Text({
  value,
  setValue,
  error,
  placeholder,
  styles,
}: {
  value: InputProps["value"];
  setValue: InputProps["setValue"];
  error?: boolean | null;
  placeholder: InputProps["placeholder"];
  styles: InputProps["styles"];
}) {
  return (
    <Input
      style={{
        ...styles?.input,
        width: "-webkit-fill-available",
        minWidth: "null",
      }}
      placeholder={placeholder}
      error={error || false}
      errorColor={styles?.error?.color as string}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(event, setValue);
      }}
    />
  );
}
