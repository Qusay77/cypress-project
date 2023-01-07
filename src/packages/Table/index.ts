import { CustomCellType } from "./types/index";
import { TableHookProps } from "./hooks/useTable/types";
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
import RenderRowExpanded from "./ui/RenderRowExpanded";
import TablePagination from "./ui/TablePagination";
import useTable from "./hooks/useTable";
import { ModifiedPaginationProps } from "./hooks/useTable/types";
export {
	tableSlice as tableState,
	actions,
	sort,
	RenderRowExpanded,
	useTable,
	MainTable,
	TablePagination,
};
export type {
	TableStateTypes,
	RowColumnDataProps,
	RowDataType,
	SortType,
	TableHookProps,
	CustomCellType,
	ModifiedPaginationProps,
};
