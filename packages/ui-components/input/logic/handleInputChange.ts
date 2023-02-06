import { ChangeEvent } from "react";

export default function handleInputChange(
  event: ChangeEvent<HTMLInputElement>,
  setValue: ((value: string) => void) | undefined
) {
  if (setValue) {
    setValue(event.target.value.trim());
  }
}
