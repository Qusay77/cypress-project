import DateRangePicker from "./blocks/DateRangePicker";
import { useState } from "react";
import RangeMenu from "./blocks/RangeMenu";
import TimeField from "./blocks/TimeInput";
import {
	PickerContainer,
	PickerModalContent,
	TimeFieldContainer,
	TimeFieldsBlock,
} from "./components/MainComponents";
import ApplyBlock from "./blocks/ApplyBlock";
import { TimePickerType } from "./types";
const DatePickerComponent = () => {
	const [fromRange, setFromRange] = useState<TimePickerType>({
		from: "00:00",
		to: "23:59",
	});
	const [toRange, setToRange] = useState<TimePickerType>({
		from: "00:00",
		to: "23:59",
	});
	const handleTimeInput = async (value: string, type: string) => {
		if (type === "from") {
			setFromRange((prev: TimePickerType) => ({ ...prev, [type]: value }));
		}
		if (type === "to") {
			setToRange((prev: TimePickerType) => ({ ...prev, [type]: value }));
		}
	};
	return (
		<PickerModalContent>
			<RangeMenu />
			<PickerContainer>
				<DateRangePicker />
				<TimeFieldsBlock>
					<TimeFieldContainer>
						<TimeField
							value={fromRange["from"]}
							callback={(v: string) => handleTimeInput(v, "from")}
						/>
					</TimeFieldContainer>
					<TimeFieldContainer>
						<TimeField
							value={toRange["to"]}
							callback={(v: string) => handleTimeInput(v, "from")}
						/>
					</TimeFieldContainer>
				</TimeFieldsBlock>
				<ApplyBlock />
			</PickerContainer>
		</PickerModalContent>
	);
};

export default DatePickerComponent;
