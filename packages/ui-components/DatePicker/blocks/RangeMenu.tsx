import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "src/services/SessionsList";
import { DatePickerStateTypes } from "src/services/SessionsList";
import { Container, RangeItem } from "../components/RangeMenuComponents";

const ranges = [
	{
		name: "Today",
		value: { start: moment().startOf("day"), end: moment().endOf("day") },
	},
	{
		name: "Yesterday",
		value: {
			start: moment().subtract(1, "day").startOf("day"),
			end: moment().subtract(1, "day").endOf("day"),
		},
	},
	{
		name: "Last 7 Days",
		value: {
			start: moment().subtract(6, "day").startOf("day"),
			end: moment().endOf("day"),
		},
	},
	{
		name: "Last 30 Day",
		value: {
			start: moment().subtract(29, "day").startOf("day"),
			end: moment().endOf("day"),
		},
	},
	{
		name: "This Month",
		value: { start: moment().startOf("month"), end: moment().endOf("month") },
	},
	{
		name: "Last Month",
		value: {
			start: moment().subtract(1, "month").startOf("month"),
			end: moment().subtract(1, "month").endOf("month"),
		},
	},
	{ name: "Custom Range", value: null },
];
const RangeMenu = () => {
	const dispatch = useDispatch();
	const { setRange } = actions;
	const { range } =
		useSelector(
			({ sessionListState }: { sessionListState: DatePickerStateTypes }) =>
				sessionListState,
		) || {};
	return (
		<Container>
			{ranges.map((rangeItem) => (
				<RangeItem
					onClick={() => dispatch(setRange(rangeItem))}
					isSelected={rangeItem.name === range.name}
					key={`${rangeItem.name}-picker`}
				>
					<p>{rangeItem.name}</p>
				</RangeItem>
			))}
		</Container>
	);
};

export default RangeMenu;
