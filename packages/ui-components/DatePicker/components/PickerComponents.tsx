import styled from "@emotion/styled";

const WeekHeaderText = styled.div`
	font-size: 12px;
	font-weight: 600;
	width: 40px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Td = styled.td<{
	selected: boolean;
	isEnd: boolean;
	isStart: boolean;
	selectedSpan: unknown;
}>`
	margin: 0;
	padding: 0;
	outline: none;
	width: fit-content;
	text-align: center;
	${({ selected, theme, isStart, isEnd }) =>
		(selected &&
			isStart &&
			`
	background:linear-gradient(90deg, #fff, ${theme.colors.Blue5});
		`) ||
		(selected &&
			isEnd &&
			`background:linear-gradient(90deg, ${theme.colors.Blue5}, #fff);`)}

	&:hover {
		${({ selectedSpan, theme, selected }) =>
		`background: ${
			selected ? "" : selectedSpan ? theme.colors.Blue5 : "inherit"
		}}`}
	}
`;

const Day = styled.div<{
	selectedSpan: unknown;
	selected: boolean;
	blocked: boolean;
	isOutsideDay: boolean;
	isEnd: boolean;
	isStart: boolean;
}>`
	font-size: 14px;
	font-weight: 400;
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box;
	width: 39px;
	height: 40px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: ${(props) => (props.selectedSpan ? 0 : "100%")};
	background: ${({ selectedSpan, selected, theme }) =>
		selectedSpan
			? theme.colors.Blue5
			: selected
				? theme.colors.Blue70
				: "inherit"};
	color: ${({ blocked, selected, theme }) =>
		blocked ? theme.colors.TextSub : selected ? "white" : "black"};
	cursor: ${({ isOutsideDay, blocked }) =>
		blocked || isOutsideDay ? "default" : "pointer"};
	&:hover {
		border: ${({ blocked, isOutsideDay, theme }) =>
		blocked || isOutsideDay ? "none" : `1px solid ${theme.colors.Blue70}`};
		border-radius: 100%;
		${({ selectedSpan, theme, selected }) =>
		`background: ${
			selected ? "" : selectedSpan ? theme.colors.Blue5 : "inherit"
		}}`}
	}
	span {
		font-weight: ${({ blocked }) => (blocked ? 200 : 400)};
	}
`;

export { WeekHeaderText, Td, Day };
