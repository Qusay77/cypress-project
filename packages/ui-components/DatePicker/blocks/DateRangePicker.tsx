/* eslint-disable no-console */
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import moment, { Moment } from "moment";
import { useState } from "react";
import { StyledWrapper } from "../components/PickerWrapper";
import { PickerIcon, RenderMonth } from "./RenderMonth";
import { RenderCalendarDay } from "./PickerComponent";
import { WeekHeaderText } from "../components/PickerComponents";

const DateRangePicker = () => {
	moment.updateLocale("en", {
		week: {
			dow: 1,
		},
		weekdaysMin: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
	});

	const [startDate, setStartDate] = useState<null | Moment>(null);
	const [endDate, setEndDate] = useState<null | Moment>(null);
	const [focusedInput, setFocusedInput] = useState<
		"startDate" | "endDate" | null
	>("startDate");
	const defaultFocusedInput = "startDate";
	return (
		<StyledWrapper>
			<DayPickerRangeController
				transitionDuration={1}
				startDate={startDate}
				endDate={endDate}
				focusedInput={focusedInput || defaultFocusedInput}
				onFocusChange={(focusedInput) => {
					setFocusedInput(focusedInput);
				}}
				onDatesChange={({ startDate, endDate }) => {
					setStartDate(startDate);
					setEndDate(endDate);
				}}
				navPrev={<PickerIcon left action={() => console.log("prev")} />}
				navNext={<PickerIcon action={() => console.log("next")} />}
				renderMonthElement={(props) => <RenderMonth {...props} />}
				renderCalendarDay={(props) => <RenderCalendarDay {...props} />}
				initialVisibleMonth={() => moment()}
				renderWeekHeaderElement={(week) => (
					<WeekHeaderText>{week}</WeekHeaderText>
				)}
				hideKeyboardShortcutsPanel
				numberOfMonths={2}
			/>
		</StyledWrapper>
	);
};

export default DateRangePicker;
