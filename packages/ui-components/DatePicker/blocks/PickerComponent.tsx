import { Td, Day } from "../components/PickerComponents";

const RenderCalendarDay = (props: any) => {
	const { day, isOutsideDay, modifiers, onDayClick } = props;
	const isStart = modifiers?.has("selected-start");
	const isEnd = modifiers?.has("selected-end");
	const selected = modifiers && (isStart || isEnd);
	const selectedSpan =
		modifiers && (modifiers.has("selected-span") || modifiers.has("hovered"));
	const blocked =
		modifiers && !modifiers.has("valid") && modifiers.has("blocked");

	const onClickDay = () => {
		onDayClick(day);
	};
	return (
		<Td
			selected={selected}
			isStart={isStart}
			isEnd={isEnd}
			selectedSpan={selectedSpan}
		>
			<Day
				blocked={blocked}
				selectedSpan={selectedSpan}
				isOutsideDay={isOutsideDay}
				selected={selected}
				isStart={isStart}
				isEnd={isEnd}
				onClick={onClickDay}
			>
				<span>{day && day.format("D")}</span>
			</Day>
		</Td>
	);
};

export { RenderCalendarDay };
