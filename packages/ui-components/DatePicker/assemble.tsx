import DateRangePicker from "./components/DateRangePicker";
import styled from "@emotion/styled";
import RangeMenu from "./components/RangeMenu";
import TimeField from "./components/TimeInput";
import { useState } from "react";

const PickerModalContent = styled.div`
	width: 780px;
	height: fit-content;
	display: flex;
	padding: 16px;
`;

const PickerContainer = styled.div`
	padding: 0 16px;
`;

const TimeFieldContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const TimeFieldsBlock = styled.div`
	display: flex;
	width: 100%;
	height: 65px;
	border-bottom: 1px solid #e6e6e6;
`;
const DatePickerComponent = () => {
	const [time, setTime] = useState<any>({ from: "00:00", to: "23:59" });
	const handleTimeInput = async (value: any, type: any) => {
		setTime((prev: any) => ({ ...prev, [type]: value }));
	};
	return (
		<PickerModalContent>
			<RangeMenu />
			<PickerContainer>
				<DateRangePicker />
				<TimeFieldsBlock>
					<TimeFieldContainer>
						<TimeField
							value={time["from"]}
							callback={(v: any) => handleTimeInput(v, "from")}
						/>
					</TimeFieldContainer>
					<TimeFieldContainer>
						<TimeField
							value={time["from"]}
							callback={(v: any) => handleTimeInput(v, "from")}
						/>
					</TimeFieldContainer>
				</TimeFieldsBlock>
				<>Selected Time Frame</>
			</PickerContainer>
		</PickerModalContent>
	);
};

export default DatePickerComponent;
