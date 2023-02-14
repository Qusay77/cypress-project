import DateRangePicker from "./blocks/DateRangePicker";
import RangeMenu from "./blocks/RangeMenu";
import TimeField from "./blocks/TimeInput";
import {
	PickerContainer,
	PickerModalContent,
	TimeFieldContainer,
	TimeFieldsBlock,
} from "./components/MainComponents";
import ApplyBlock from "./blocks/ApplyBlock";
import { useDispatch, useSelector } from "react-redux";
import { actions, DatePickerStateTypes } from "src/services/SessionsList";
const DatePickerComponent = () => {
	const dispatch = useDispatch();
	const { setFromRange, setToRange } = actions;
	const { fromRange, toRange } =
		useSelector(
			({ sessionListState }: { sessionListState: DatePickerStateTypes }) =>
				sessionListState,
		) || {};
	const handleTimeInput = async (value: string, type: string) => {
		if (type === "from") {
			dispatch(setFromRange(value));
		}
		if (type === "to") {
			dispatch(setToRange(value));
		}
	};
	// const ww = useSelector((s) => s) || {};
	// console.log(ww, "ss");
	return (
		<PickerModalContent>
			<RangeMenu />
			<PickerContainer>
				<DateRangePicker />
				<TimeFieldsBlock>
					<TimeFieldContainer>
						<TimeField
							value={fromRange}
							callback={(v: string) => handleTimeInput(v, "from")}
						/>
					</TimeFieldContainer>
					<TimeFieldContainer>
						<TimeField
							value={toRange}
							callback={(v: string) => handleTimeInput(v, "to")}
						/>
					</TimeFieldContainer>
				</TimeFieldsBlock>
				<ApplyBlock />
			</PickerContainer>
		</PickerModalContent>
	);
};

export default DatePickerComponent;
