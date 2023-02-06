/* eslint-disable no-console */
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import {
	PickerIcon,
	RenderMonth,
	RenderCalendarDay,
	WeekHeaderText,
} from "./PickerComponent";
import moment, { Moment } from "moment";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
	width: 600px;
	height: fit-content;
	overflow: hidden;
	.DayPicker {
		width: 600px !important;
		box-shadow: none !important;
		border-radius: 0;
		> div {
			> div {
				width: 585px !important;
			}
		}
	}

	.CalendarMonth_caption {
		padding: 0 0 46px 0 !important;
		height: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.DayPicker_weekHeader {
		padding: 0 !important;
		top: 40px !important;
		width: 280px;

		> ul {
			margin: 0 !important;
		}
	}

	.CalendarMonth {
		padding: 0 !important;
	}
	.DayPicker_weekHeaders {
		margin: 0 !important;
		display: flex;
		justify-content: space-between;
		.DayPicker_weekHeader:nth-child(1) {
			left: 8px !important;
		}
		.DayPicker_weekHeader:nth-child(2) {
			left: 317px !important;
		}
	}
	.CalendarMonthGrid {
		width: 585px !important;
		div:nth-child(2) {
			position: relative;
		}
		div:nth-child(3) {
			position: relative;
			margin-left: 36px;
		}
	}
`;

import { Global, css } from "@emotion/react";
import { useState } from "react";

const GlobalStyles = css`
	@import url("https://fonts.googleapis.com/css?family=Inter");
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");
	body {
		font-family: Inter;
		margin: 0;
	}
	p {
		margin: 0;
	}
`;

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
	return (
		<StyledWrapper>
			<Global styles={GlobalStyles} />
			<DayPickerRangeController
				transitionDuration={1}
				startDate={startDate}
				endDate={endDate}
				focusedInput={focusedInput}
				onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
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
