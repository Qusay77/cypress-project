import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	actions,
	RowColumnDataProps,
	RowDataType,
	sort,
	SortType,
	TableStateTypes,
} from "../../";
import { RootState } from "store/types";
import useEffectDepListener from "./useEffectDepListener";
import { mapValues, pickBy, unionBy } from "lodash";
const handleExtension = (
	body: () => void,
	extendArgs: { overwrite: boolean; extendFunction: () => void },
) => {
	const { overwrite, extendFunction } = extendArgs || {};
	if (overwrite) {
		if (extendFunction) {
			extendFunction();
		}
	} else {
		body();
		if (extendFunction) {
			extendFunction();
		}
	}
};
const useMethodDistributer = ({ props, extendedMethods, customSort }: any) => {
	const {
		columnsData,
		tableData,
		limitProp,
		pageProp,
		rowKeys,
		sortColumnProp,
		sortTypeProp,
		loadingProp,
		rowKey,
		additionalData,
	} = props;
	const {
		handleSortColumn: extendHandleSortColumn,
		handleDragRow: extendHandleDragRow,
		handleDragColumn: extendHandleDragColumn,
		handleExpanded: extendHandleExpanded,
		handleChangeLimit: extendHandleChangeLimit,
		onChangePage: extendOnChangePage,
	} = extendedMethods || {};
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
	const { ...tableState } = useSelector(({ table }: RootState) => table);
	const {
		limit,
		page,
		expandedRowKeys,
		data,
		columns,
		sortColumn,
		sortType,
		loading,
	} = tableState || {};
	const dispatch = useDispatch();
	const effectDeps = {
		columnsData,
		tableData,
		limitProp,
		pageProp,
		rowKeys,
		sortColumnProp,
		sortTypeProp,
		loadingProp,
		additionalData,
	};

	const handleChangesToData = (arr1: [], arr2: RowDataType[]) => {
		return {
			after: unionBy(arr1, arr2, "id"),
		};
	};
	useEffectDepListener(
		(changedDeps: { [key: string]: any }) => {
			const changeConfig = {
				columns: changedDeps["columnsData"],
				data: handleChangesToData(
					changedDeps["additionalData"]?.after || [],
					changedDeps["tableData"]?.after || data,
				),
				limit: changedDeps["limitProp"],
				page: changedDeps["pageProp"],
				expandedRowKeys: changedDeps["rowKeys"],
				sortColumn: changedDeps["sortColumnProp"],
				sortType: changedDeps["sortTypeProp"],
				loading: changedDeps["loadingProp"],
			};
			const cleanedObject = pickBy(
				changeConfig,
				(v: unknown) => v !== undefined,
			);
			const afterState = mapValues(cleanedObject, ({ after }) => after);

			dispatch(
				loadInitialState({
					...(afterState as TableStateTypes),
				}),
			);
		},
		Object.values(effectDeps),
		Object.keys(effectDeps ?? {}) as never[],
	);

	const handleExpanded = (rowData: RowColumnDataProps) => {
		const body = () => {
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
		handleExtension(body, extendHandleExpanded);
	};
	const handleChangeLimit = (dataKey: number) => {
		const body = () => {
			dispatch(setPage(1));
			dispatch(setLimit(dataKey));
		};
		handleExtension(body, extendHandleChangeLimit);
	};
	const paginatedData: RowDataType[] = data.filter((v, i: number) => {
		const start = limit * (page - 1);
		const end = start + limit;
		return i >= start && i < end;
	});
	const onChangePage = (arg: number) => {
		const body = () => {
			dispatch(setPage(arg));
		};
		handleExtension(body, extendOnChangePage);
	};
	const [isDragRow, setIsDragRow] = useState(false);
	const getData = (): RowDataType[] => {
		if (customSort && !isDragRow) {
			return customSort(paginatedData, sortColumn, sortType);
		} else if (sortColumn && sortType && !isDragRow) {
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
		const body = () => {
			dispatch(setColumns(sort(columns, sourceId, targetId)));
		};
		handleExtension(body, extendHandleDragColumn);
	};

	const handleDragRow = (sourceId: string, targetId: string) => {
		const body = () => {
			dispatch(setData(sort(data, sourceId, targetId)));
			setIsDragRow(true);
		};
		handleExtension(body, extendHandleDragRow);
	};

	const handleSortColumn = (sortColumn: string, sortType?: SortType) => {
		const body = () => {
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
		handleExtension(body, extendHandleSortColumn);
	};
	const state = {
		columns,
		sortedData,
		sortColumn,
		sortType,
		loading,
		expandedRowKeys,
		limit,
		page,
		data,
	};
	const methods = {
		handleSortColumn,
		handleDragRow,
		handleDragColumn,
		handleExpanded,
		handleChangeLimit,
		onChangePage,
	};
	return { state, methods };
};

export default useMethodDistributer;
