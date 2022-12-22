import { ChangeEvent } from "react";

export default function handleInputChange(
	event: ChangeEvent<HTMLInputElement>,
	setValue: (arg1: string) => void
) {
	setValue(event.target.value);
}
