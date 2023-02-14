import { Moment } from "moment";

interface DatePickerStateTypes {
	startDate: Moment | null;
	endDate: Moment | null;
	fromRange: string;
	toRange: string;
	[key: string]: unknown;
}

export type { DatePickerStateTypes };
