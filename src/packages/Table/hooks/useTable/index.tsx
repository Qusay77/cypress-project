import { ReactNode, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
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
const useTable = ({ paginationProps, tableProps }: TableHookProps) => {
	const {
		setLimit,
		setPage,
		setExpandedRowKeys,
		setData,
		setColumns,
		setSortColumn,
		setSortType,
		setLoading,
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
	const { data: tableData, rowKey = "id" } = tableProps;
	const dispatch = useDispatch();
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
	const getData = (): RowDataType[] => {
		if (sortColumn && sortType) {
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
		return data;
	};
	const sortedData = getData();
	const handleDragColumn = (sourceId: string, targetId: string) => {
		dispatch(setColumns(sort(columns, sourceId, targetId)));
	};

	const handleDragRow = (sourceId: string, targetId: string) => {
		dispatch(setData(sort(paginatedData, sourceId, targetId)));
	};

	const handleSortColumn = (sortColumn: string, sortType?: SortType) => {
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
		expandedRowKeys,
		renderRowExpanded: RenderRowExpanded,
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
	const PagingContainerProps = {
		onChangePage: (arg: number) => dispatch(setPage(arg)),
		onChangeLimit: handleChangeLimit,
		...paginationProps,
	};

	const ColumnContainerProps = {
		handleDragColumn,
		expandedRowKeys,
		handleExpanded,
		rowKey,
	};
	useEffect(() => {
		dispatch(setData(tableData as RowDataType[]));
	}, [tableData]);
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
