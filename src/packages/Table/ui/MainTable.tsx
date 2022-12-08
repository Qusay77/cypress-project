import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Table, Pagination } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import DraggableHeaderCell from "../logic/DragableHeaderCell";
import Row from "../logic/Row";
import { useEffect, useState } from "react";
const { Cell, Column } = Table;
import sort from "../logic/sort";
import { MainTableProps } from "../types/index";

export default function MainTable({ fakeData }: MainTableProps) {
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const handleChangeLimit = (dataKey: number) => {
		setPage(1);
		setLimit(dataKey);
	};

	const [data, setData] = useState(fakeData);
	const paginatedData = data.filter((v: any, i: number) => {
		const start = limit * (page - 1);
		const end = start + limit;
		return i >= start && i < end;
	});

	useEffect(() => {
		setData(fakeData);
	}, [fakeData]);
	const [columns, setColumns] = useState([
		{ id: "id", name: "Id", width: 50 },
		{ id: "firstName", name: "First Name", flexGrow: 1 },
		{ id: "lastName", name: "Last Name", flexGrow: 1 },
		{ id: "email", name: "Email", flexGrow: 1 },
	]);

	const handleDragColumn = (sourceId: string, targetId: string) => {
		setColumns(sort(columns, sourceId, targetId));
	};

	const handleDragRow = (sourceId: string, targetId: string) => {
		setData(sort(paginatedData, sourceId, targetId));
	};

	const CompactCell = (props: any) => {
		return (
			<Cell
				{...props}
				style={{
					padding: 2,
					borderTop: "1px solid red",
				}}
			/>
		);
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div>
				<Table
					autoHeight
					data={paginatedData}
					rowKey="id"
					style={{ border: "1px solid #E6E6E6" }}
					renderRow={(children, rowData) => {
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
					}}
					wordWrap={true}
				>
					{columns.map((column) => (
						<Column
							width={column.width}
							key={column.id}
							flexGrow={column.flexGrow}
							align={column.id === "id" ? "center" : "left"}
						>
							<DraggableHeaderCell onDrag={handleDragColumn} id={column.id}>
								{column.name}
							</DraggableHeaderCell>
							<CompactCell dataKey={column.id} />
						</Column>
					))}
				</Table>
				<div style={{ padding: 20 }}>
					<Pagination
						prev
						next
						first
						last
						ellipsis
						boundaryLinks
						maxButtons={5}
						size="xs"
						layout={["-", "limit", "|", "pager", "skip"]}
						total={data.length}
						limitOptions={[10, 30, 50]}
						limit={limit}
						activePage={page}
						onChangePage={setPage}
						onChangeLimit={handleChangeLimit}
					/>
				</div>
			</div>
		</DndProvider>
	);
}
