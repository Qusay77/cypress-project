import tableSlice from "./state";
import MainTable from "./ui/MainTable";
import {
	TableStateTypes,
	RowColumnDataProps,
	RowDataType,
	SortType,
} from "./types";
import { actions } from "./state";
import { sort } from "./logic/sort";
import RenderRowExpanded from "./logic/RenderRowExpanded";
import useTable from "./hooks/useTable";
export {
	tableSlice as tableState,
	actions,
	sort,
	RenderRowExpanded,
	useTable,
	MainTable,
};
export type { TableStateTypes, RowColumnDataProps, RowDataType, SortType };
