import { Moment } from "moment";

interface DatePickerStateTypes {
	startDate: Moment | null;
	endDate: Moment | null;
	fromRange: string;
	toRange: string;
	range: {
		name: string;
		value: { start: Moment; end: Moment } | null;
	};
	[key: string]: unknown;
}

export type { DatePickerStateTypes };
