import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	justify-content: space-between;
	align-items: start;
	padding: 0 8px;
	height: fit-content;
	border-right: 1px solid #e6e6e6;
	width: 144px;
`;

const ranges = [
	"Today",
	"Yesterday",
	"Last 7 Days",
	"Last 30 Days",
	"This Month",
	"Last Month",
	"Custom Range",
];

const RangeItem = styled.div`
	cursor: pointer;
	font-weight: 14px;
	font-weight: 400;
	color: #333333;
`;

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
