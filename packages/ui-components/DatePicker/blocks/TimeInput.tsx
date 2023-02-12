import { useEffect, useState } from "react";
import {
	EditableField,
	TimeFieldBox,
	Separator,
} from "../components/TimeFieldComponents";

const TimeField = ({ value, callback }: any) => {
	const [initialValue, setInitialValue] = useState<any>(null);
	const [hours, setHours] = useState<any>(null);
	const [minutes, setMinutes] = useState<any>(null);
	useEffect(() => {
		if (value) {
			setInitialValue(value.split(":"));
		}
	}, [value]);
	useEffect(() => {
		if (initialValue) {
			setHours(initialValue[0]);
			setMinutes(initialValue[1]);
			setInitialValue(null);
		}
	}, [initialValue]);
	const handleTimeInput = (e: any, type: any) => {
		const original = e.target.value
			.replace(/[^0-9.]/g, "")
			.replace(/(\..*?)\..*/g, "$1");
		const max = type === "m" ? 59 : 23;
		const parsed = parseInt(original, 10);
		const digits = parsed < 10 ? `0${parsed}` : parsed;
		const int = parsed > max ? max : digits;
		if (type === "h") {
			setHours(int);
		}

		if (type === "m") {
			setMinutes(int);
		}
	};

	useEffect(() => {
		if (hours && !minutes) {
			setMinutes("00");
			callback(`${hours}:00`);
		} else if (!hours && minutes) {
			setHours("00");
			callback(`00:${minutes}`);
		} else if (hours && minutes && !initialValue) {
			callback(`${hours}:${minutes}`);
		}
	}, [hours, initialValue, minutes]);
	return (
		<TimeFieldBox>
			<EditableField
				value={hours ?? "--"}
				onChange={(e) => handleTimeInput(e, "h")}
			/>
			<Separator>:</Separator>
			<EditableField
				value={minutes ?? "--"}
				onChange={(e) => handleTimeInput(e, "m")}
			/>
		</TimeFieldBox>
	);
};

export default TimeField;
