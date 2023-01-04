import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "@core/store";
import { useTable } from "@packages/table";
import { mockUsers } from "./mock";
import NotRenderRowExpanded from "./notRenderRowExpanded";
import CustomCell from "./customCell";
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

const TableLOL = ({ tableProps, paginationProps, ...props }) => {
	const [defData, setDefData] = useState(tableProps.data);
	const ButtonLoL = () => {
		const onClick = () => {
			const newData = mockUsers(1);
			const item = newData[0];
			item.id = defData.length + 1;
			setDefData((prev) => [item, ...prev]);
		};
		return <button onClick={onClick}>click to add data</button>;
	};

	const { editableColumns, editableExpanded } = props;
	const tablePropsEdit = {
		...tableProps,
		customCells: {
			firstName: CustomCell,
		},
		data: defData,
		...(editableColumns && {
			columns: originalColumns.filter((e) =>
				editableColumns.find((s: unknown) => s === e.id),
			),
		}),
	};
	const { Table } = useTable({
		tableProps: tablePropsEdit,
		paginationProps,
		rowProps: {
			ExpandRow: editableExpanded ? NotRenderRowExpanded : null,
		},
	});
	return (
		<>
			{Table}
			<ButtonLoL />
		</>
	);
};

export default {
	title: "Example/MainTable",
	component: TableLOL,
	argTypes: {
		editableColumns: {
			options: originalColumns.map((e) => e.id),
			control: { type: "check" },
		},
		editableExpanded: { control: "boolean" },
	},
} as ComponentMeta<typeof TableLOL>;

const Template: ComponentStory<typeof TableLOL> = (args) => (
	<Provider store={store}>
		<TableLOL {...args} />
	</Provider>
);

export const Table = Template.bind({});
Table.args = {
	paginationProps: {
		size: "xs",
	},
	tableProps: {
		rowKey: "id",
		data: defaultData,
		columns: originalColumns,
	},
};
