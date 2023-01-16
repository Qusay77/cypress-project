import React, { useState } from "react";
import NotRenderRowExpanded from "./notRenderRowExpanded";
import CustomCell from "./customCell";
import {
	useTable,
	TableHookProps,
	RowDataType,
	// TablePagination,
} from "@packages/table";
import { mockUsers } from "./mock";
import useDeepCompareEffect from "use-deep-compare-effect";
// import { PaginationProps } from "rsuite";

const defaultData = mockUsers(100);
const originalColumns = [
	{ id: "id", name: "Id", width: 50, sortable: true },
	{
		id: "firstName",
		name: "First Name",
		flexGrow: 1,
		sortable: true,
	},
	{ id: "lastName", name: "Last Name", flexGrow: 1, sortable: true },
	{ id: "email", name: "Email", flexGrow: 1, sortable: true },
];

const TableStoryExampleComponent = ({
	tableProps,
	paginationProps,
	rowProps,
	CustomSortIcon,
	CustomHeaderCell,
	...props
}: TableHookProps) => {
	const [additionalData, setAdditionalData] = useState<RowDataType[]>([]);
	const [counter, setCounter] = useState(1);
	const [searchText, setSearchText] = useState("");
	const [filteredData, setFilteredData] = useState(tableProps?.data);
	useDeepCompareEffect(() => {
		if (searchText.length) {
			const isIncluded = (row: RowDataType) => {
				const res = Object.values(row)
					.map((r) => r.toString().toLowerCase())
					.some((r) => r.indexOf(searchText.toLowerCase()) > -1);
				return res;
			};
			const filter = tableProps?.data.filter(isIncluded);
			setFilteredData(filter);
		} else {
			setFilteredData(tableProps?.data);
		}
	}, [searchText, tableProps?.data]);
	const AddButton = () => {
		const onClick = () => {
			const newData = mockUsers(1);
			const item = newData[0];
			item.id = (tableProps?.data?.length || 0) + counter + "lol";
			setAdditionalData([item]);
			setCounter((prev) => prev + 1);
		};
		return <button onClick={onClick}>click to add data 2</button>;
	};

	const { editableColumns, editableExpanded, PaginationComponent } = props;
	const { draggable } = rowProps || {};
	const tablePropsEdit: TableHookProps["tableProps"] = {
		...tableProps,
		customCells: {
			firstName: CustomCell,
		},
		autoHeight: true,
		virtualized: true,
		data: filteredData || [],
		additionalData,
		...(editableColumns && {
			columns: originalColumns.filter((e) =>
				editableColumns.find((s: unknown) => s === e.id),
			),
		}),
	};
	const { Table } = useTable({
		extendedMethods: {
			// handleExpanded: {
			// 	extendFunction: () => console.log("extend"),
			// },
		},
		// customSort: (e: any) =>  <div></div>,
		tableProps: tablePropsEdit,
		paginationProps,
		expandProps: {
			columnId: "id",
			// ExpandComponent,
		},
		CustomSortIcon,
		CustomHeaderCell,
		PaginationComponent,
		rowProps: {
			ExpandRow: editableExpanded ? NotRenderRowExpanded : null,
			draggable,
		},
	});
	return (
		<>
			{Table}
			<AddButton />
			<input onChange={({ target }) => setSearchText(target.value)} />
		</>
	);
};

const argTypes = {
	editableColumns: {
		options: originalColumns.map((e) => e.id),
		control: { type: "check" },
	},
	editableExpanded: { control: "boolean" },
};
// const paginationInit: PaginationProps = {
// 	size: "xs",
// 	prev: true,
// 	next: true,
// 	first: true,
// 	last: true,
// 	ellipsis: true,
// 	boundaryLinks: true,
// 	limit: 10,
// 	limitOptions: [10, 50, 100],
// 	maxButtons: 5,
// 	activePage: 1,
// 	layout: ["total", "-", "limit", "|", "pager", "skip"],
// 	total: 700,
// };
const args: TableHookProps = {
	paginationProps: {
		size: "xs",
	},
	// PaginationComponent: () => <TablePagination {...paginationInit} />,
	rowProps: {
		draggable: true,
	},
	// CustomSortIcon: () => <>lol</>,
	// CustomHeaderCell: () => <>lol</>,
	tableProps: {
		rowKey: "id",
		data: defaultData,
		columns: originalColumns,
	},
};

export { argTypes, args };
export default TableStoryExampleComponent;
