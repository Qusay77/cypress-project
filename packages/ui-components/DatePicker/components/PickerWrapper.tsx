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
		.DayPicker_weekHeader:nth-of-type(1) {
			left: 8px !important;
		}
		.DayPicker_weekHeader:nth-of-type(2) {
			left: 317px !important;
		}
	}
	.CalendarMonthGrid {
		width: 585px !important;
		div:nth-of-type(2) {
			position: relative;
		}
		div:nth-of-type(3) {
			position: relative;
			margin-left: 36px;
		}
	}

	.CalendarMonth_table {
		border-radius: 8px;
	}
`;

export {StyledWrapper} 