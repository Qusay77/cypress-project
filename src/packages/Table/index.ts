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
export { tableSlice as tableState, actions, sort, RenderRowExpanded };
export type { TableStateTypes, RowColumnDataProps, RowDataType, SortType };
export default MainTable;
