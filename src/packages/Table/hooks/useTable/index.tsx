import { ReactNode, useMemo } from "react";
import { RenderRowExpanded, RowDataType, MainTable } from "../../";
import { TableHookProps } from "./types";
import Row from "../../ui/Row";
import { PaginationProps } from "rsuite";
import useMethodDistributer from "./useMethodDistributer";
const useTable = ({
	paginationProps,
	tableProps,
	columnProps,
	rowProps,
	extendedMethods,
	customSort,
	PaginationComponent,
	expandProps,
	CustomSortIcon,
	CustomHeaderCell,
}: TableHookProps) => {
	const {
		data: tableData = [],
		rowKey = "id",
		columns: columnsData = [],
		sortColumn: sortColumnProp,
		sortType: sortTypeProp,
		loading: loadingProp = false,
		customCells,
		additionalData,
		...tablePropsRest
	} = tableProps || {};
	const { limit: limitProp = 10, activePage: pageProp = 1 } =
		paginationProps || {};
	const { expandedRowKeys: rowKeys = [] } = columnProps || {};
	const { ExpandRow, draggable } = rowProps || {};

	const { state, methods } = useMethodDistributer({
		props: {
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
		},
		extendedMethods,
		customSort,
	});
	const {
		columns,
		sortedData,
		sortColumn,
		sortType,
		loading,
		expandedRowKeys,
		limit,
		page,
		data,
	} = state;
	const {
		handleSortColumn,
		handleDragRow,
		handleDragColumn,
		handleExpanded,
		handleChangeLimit,
		onChangePage,
	} = methods;

	const TableContainerProps = {
		columns,
		data: sortedData,
		sortColumn,
		sortType,
		onSortColumn: handleSortColumn,
		loading,
		rowKey,
		expandedRowKeys,
		renderRowExpanded: ExpandRow ?? RenderRowExpanded,
		renderRow: (children?: ReactNode, rowData?: RowDataType | undefined) => {
			return rowData ? (
				<Row
					key={rowData.id}
					rowData={rowData}
					id={rowData.id}
					onDrag={handleDragRow}
					draggable={draggable}
				>
					{children}
				</Row>
			) : (
				children
			);
		},
		...tablePropsRest,
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
		onChangePage,
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
				tableProps={TableContainerProps}
				columnProps={ColumnContainerProps}
				{...(PaginationComponent
					? { PaginationComponent }
					: { paginationProps: PagingContainerProps })}
				expandProps={expandProps}
				CustomSortIcon={CustomSortIcon}
				CustomHeaderCell={CustomHeaderCell}
			/>
		),
		[TableContainerProps, ColumnContainerProps, PagingContainerProps],
	);
	return { Table };
};

export default useTable;
