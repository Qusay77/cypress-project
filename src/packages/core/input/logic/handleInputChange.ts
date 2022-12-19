import { ChangeEvent } from "react";

export default function handleInputChange(
	event: ChangeEvent<HTMLInputElement>,
	setValue: Function
) {
	setValue(event.target.value);
}
