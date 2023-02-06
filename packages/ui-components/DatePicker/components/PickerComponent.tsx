import styled from "@emotion/styled";
// import moment from "moment";
import LeftArrow from "../assets/chevron_left.svg";
const NavIcon = styled.div`
	border-radius: 50%;
	position: absolute;
	top: 2px;
	width: 24px;
	height: 24px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;

	&:active {
		transform: scale(0.92);
	}
	&.prev {
		left: 7px;
	}
	&.next {
		right: -7px;
		transform: rotate(180deg);
	}
`;

const PickerIcon = ({ action, left }: any) => (
	<NavIcon onClick={action} className={left ? "prev" : "next"}>
		<img src={LeftArrow} />
	</NavIcon>
);

const MonthCaption = styled.div`
	font-size: 14px;
	line-height: 17px;
	color: #1d99ff;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	span:nth-child(1) {
		font-weight: 700;
	}
	span:nth-child(2) {
		font-weight: 400;
	}
`;

const WeekHeaderText = styled.div`
	font-size: 12px;
	font-weight: 600;
	width: 40px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const RenderMonth = (props: any) => {
	const { month } = props;
	return (
		<MonthCaption>
			<span>{month.locale("en").format("MMMM")}</span>,&nbsp;
			<span>{month.locale("en").format("YYYY")}</span>
		</MonthCaption>
	);
};

const Td = styled.td<{
	selectedSpan: unknown;
	selected: boolean;
	blocked: boolean;
	isOutsideDay: boolean;
}>`
	margin: 0;
	padding: 0;
	outline: none;
	width: fit-content;
	text-align: center;
	border-radius: ${(props) => (props.selectedSpan ? 0 : "100%")};
	cursor: ${(props) => (props.isOutsideDay ? "default" : "pointer")};
	background: ${(props) =>
		props.selectedSpan ? "#F4FAFF" : props.selected ? "#61B8FF" : "inherit"};
	color: ${(props) =>
		props.blocked ? "#B3B3B3" : props.selected ? "white" : "black"};
`;

const Day = styled.div<{
	selectedSpan?: unknown;
	selected?: boolean;
	blocked: boolean;
	isOutsideDay: boolean;
}>`
	font-size: 14px;
	font-weight: 400;
	box-shadow: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 39px;
	height: 40px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 100%;
	cursor: ${(props) =>
		props.blocked || props.isOutsideDay ? "default" : "pointer"};
	&:hover {
		border: ${(props) =>
		props.blocked || props.isOutsideDay ? "none" : "1.5px solid #61B8FF"};
	}

	span {
		font-weight: ${(props) => (props.blocked ? 200 : 400)};
	}
`;
const RenderCalendarDay = (props: any) => {
	const { day, isOutsideDay, modifiers, onDayClick } = props;
	const selected =
		modifiers &&
		(modifiers.has("selected-start") || modifiers.has("selected-end"));
	const selectedSpan =
		modifiers && (modifiers.has("selected-span") || modifiers.has("hovered"));
	const blocked =
		modifiers && !modifiers.has("valid") && modifiers.has("blocked");

	const onClickDay = () => {
		onDayClick(day);
	};
	return (
		<Td
			selectedSpan={selectedSpan}
			selected={selected}
			blocked={blocked}
			isOutsideDay={isOutsideDay}
			onClick={onClickDay}
		>
			<Day blocked={blocked} isOutsideDay={isOutsideDay}>
				<span>{day && day.format("D")}</span>
			</Day>
		</Td>
	);
};

export { RenderMonth, RenderCalendarDay, PickerIcon, WeekHeaderText };
