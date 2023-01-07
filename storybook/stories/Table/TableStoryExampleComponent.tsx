import React, { useState } from "react";
import NotRenderRowExpanded from "./notRenderRowExpanded";
import CustomCell from "./customCell";
import { useTable, TableHookProps, RowDataType } from "@packages/table";
import { mockUsers } from "./mock";

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
	...props
}: TableHookProps) => {
	const [additionalData, setAdditionalData] = useState<RowDataType[]>([]);
	const [counter, setCounter] = useState(1);
	const AddButton = () => {
		const onClick = () => {
			const newData = mockUsers(1);
			const item = newData[0];
			item.id = (tableProps?.data?.length || 0) + counter + "lol";
			setAdditionalData([item]);
			setCounter((prev) => prev + 1);
		};
		return <button onClick={onClick}>click to add data</button>;
	};

	const { editableColumns, editableExpanded } = props;
	const tablePropsEdit: TableHookProps["tableProps"] = {
		...tableProps,
		customCells: {
			firstName: CustomCell,
		},
		autoHeight: true,
		virtualized: true,
		data: tableProps?.data || [],
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
		rowProps: {
			ExpandRow: editableExpanded ? NotRenderRowExpanded : null,
		},
	});
	return (
		<>
			{Table}
			<AddButton />
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

const args: TableHookProps = {
	paginationProps: {
		size: "xs",
	},
	tableProps: {
		rowKey: "id",
		data: defaultData,
		columns: originalColumns,
	},
};

export { argTypes, args };
export default TableStoryExampleComponent;
