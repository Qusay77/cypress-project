import { Container, RangeItem } from "../components/RangeMenuComponents";
const ranges = [
	"Today",
	"Yesterday",
	"Last 7 Days",
	"Last 30 Days",
	"This Month",
	"Last Month",
	"Custom Range",
];
const RangeMenu = () => {
	return (
		<Container>
			{ranges.map((range) => (
				<RangeItem key={`${range}-picker`}>{range}</RangeItem>
			))}
		</Container>
	);
};

export default RangeMenu;
