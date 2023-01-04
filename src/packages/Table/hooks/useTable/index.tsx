import { ReactNode, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDeepCompareEffect from "use-deep-compare-effect";
import {
	actions,
	RenderRowExpanded,
	RowColumnDataProps,
	RowDataType,
	sort,
	SortType,
	MainTable,
} from "../../";
import { RootState } from "store/types";
import { TableHookProps } from "./types";
import Row from "../../ui/Row";
import { PaginationProps } from "rsuite";
const useTable = ({
	paginationProps,
	tableProps,
	columnProps,
	rowProps,
}: TableHookProps) => {
	const {
		data: tableData = [],
		rowKey = "id",
		columns: columnsData = [],
		sortColumn: sortColumnProp,
		sortType: sortTypeProp,
		loading: loadingProp = false,
		customCells,
	} = tableProps || {};
	const { limit: limitProp = 10, activePage: pageProp = 1 } = paginationProps;
	const { expandedRowKeys: rowKeys = [] } = columnProps || {};
	const { ExpandRow } = rowProps || {};

	const {
		setLimit,
		setPage,
		setExpandedRowKeys,
		setData,
		setColumns,
		setSortColumn,
		setSortType,
		setLoading,
		loadInitialState,
	} = actions;
	const {
		limit,
		page,
		expandedRowKeys,
		data,
		columns,
		sortColumn,
		sortType,
		loading,
	} = useSelector(({ table }: RootState) => table);
	const dispatch = useDispatch();
	useDeepCompareEffect(() => {
		dispatch(
			loadInitialState({
				columns: columnsData,
				data: tableData,
				limit: limitProp,
				page: pageProp,
				expandedRowKeys: rowKeys,
				sortColumn: sortColumnProp,
				sortType: sortTypeProp,
				loading: loadingProp,
			}),
		);
	}, [
		columnsData,
		tableData,
		limitProp,
		pageProp,
		rowKeys,
		sortColumnProp,
		sortTypeProp,
		loadingProp,
	]);
	const handleExpanded = (rowData: RowColumnDataProps) => {
		let open = false;
		const nextExpandedRowKeys: Array<number> = [];
		expandedRowKeys.forEach((key: number) => {
			if (key === rowData[rowKey]) {
				open = true;
			} else {
				nextExpandedRowKeys.push(key);
			}
		});
		if (!open) {
			nextExpandedRowKeys.push(rowData[rowKey] as number);
		}
		dispatch(setExpandedRowKeys(nextExpandedRowKeys));
	};
	const handleChangeLimit = (dataKey: number) => {
		dispatch(setPage(1));
		dispatch(setLimit(dataKey));
	};
	const paginatedData: RowDataType[] = data.filter((v, i: number) => {
		const start = limit * (page - 1);
		const end = start + limit;
		return i >= start && i < end;
	});
	const [isDragRow, setIsDragRow] = useState(false);
	const getData = (): RowDataType[] => {
		if (sortColumn && sortType && !isDragRow) {
			return paginatedData.sort((a, b) => {
				let x = a[sortColumn];
				let y = b[sortColumn];
				if (typeof x === "string") {
					x = x.charCodeAt(0);
				}
				if (typeof y === "string") {
					y = y.charCodeAt(0);
				}
				if (sortType === "asc") {
					return x - y;
				} else {
					return y - x;
				}
			});
		}
		return paginatedData;
	};
	const sortedData = getData();
	const handleDragColumn = (sourceId: string, targetId: string) => {
		dispatch(setColumns(sort(columns, sourceId, targetId)));
	};

	const handleDragRow = (sourceId: string, targetId: string) => {
		dispatch(setData(sort(data, sourceId, targetId)));
		setIsDragRow(true);
	};

	const handleSortColumn = (sortColumn: string, sortType?: SortType) => {
		setIsDragRow(false);
		dispatch(setLoading(true));
		setTimeout(() => {
			dispatch(setLoading(false));
			dispatch(setSortColumn(sortColumn));
			if (sortType) {
				dispatch(setSortType(sortType));
			}
		}, 500);
	};
	const TableContainerProps = {
		columns,
		data: sortedData,
		sortColumn,
		sortType,
		onSortColumn: handleSortColumn,
		loading,
		rowKey,
		// height: 500,
		autoHeight: true,
		virtualized: true,
		expandedRowKeys,
		renderRowExpanded: ExpandRow ?? RenderRowExpanded,
		renderRow: (children?: ReactNode, rowData?: RowDataType | undefined) => {
			return rowData ? (
				<Row
					key={rowData.id}
					rowData={rowData}
					id={rowData.id}
					onDrag={handleDragRow}
				>
					{children}
				</Row>
			) : (
				children
			);
		},
	};
	const paginationInit: PaginationProps = {
		size: "xs",
		prev: true,
		next: true,
		first: true,
		last: true,
		ellipsis: true,
		boundaryLinks: true,
		limit,
		limitOptions: [10, 50, 100],
		maxButtons: 5,
		activePage: page,
		layout: ["total", "-", "limit", "|", "pager", "skip"],
		...paginationProps,
		total: data.length,
	};
	const PagingContainerProps = {
		onChangePage: (arg: number) => dispatch(setPage(arg)),
		onChangeLimit: handleChangeLimit,
		...paginationInit,
	};
	const ColumnContainerProps = {
		handleDragColumn,
		expandedRowKeys,
		handleExpanded,
		rowKey,
		customCells,
	};
	const Table = useMemo(
		() => (
			<MainTable
				paginationProps={PagingContainerProps}
				tableProps={TableContainerProps}
				columnProps={ColumnContainerProps}
			/>
		),
		[TableContainerProps, ColumnContainerProps, PagingContainerProps],
	);
	return { Table };
};

export default useTable;
