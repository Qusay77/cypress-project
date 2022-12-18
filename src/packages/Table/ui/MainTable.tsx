/** @jsxImportSource @emotion/react */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Table, Pagination } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "rsuite-table/dist/css/rsuite-table.css";
import DraggableHeaderCell from "../logic/DraggableHeaderCell";
import Row from "../logic/Row";
import { useEffect, useState } from "react";
const { Cell, Column } = Table;
import sort from "../logic/sort";
import { MainTableProps, RowDataProps } from "../types/index";
import ExpandCell from "../logic/ExpandCell";
import RenderRowExpanded from "./RenderRowExpanded";

export default function MainTable({ fakeData }: MainTableProps) {
  const rowKey = "id";
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [expandedRowKeys, setExpandedRowKeys] = useState<any>([]);

  const handleExpanded = (rowData: RowDataProps) => {
    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach((key: number) => {
      if (key === rowData[rowKey]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData[rowKey]);
    }

    setExpandedRowKeys(nextExpandedRowKeys);
  };

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };

  const [data, setData] = useState(fakeData);
  const paginatedData = data.filter((v: unknown, i: number) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  useEffect(() => {
    setData(fakeData);
  }, [fakeData]);
  const [columns, setColumns] = useState([
    { id: "id", name: "Id", width: 50, sortable: true },
    { id: "firstName", name: "First Name", flexGrow: 1, sortable: true },
    { id: "lastName", name: "Last Name", flexGrow: 1 },
    { id: "email", name: "Email", flexGrow: 1 },
  ]);

  const handleDragColumn = (sourceId: string, targetId: string) => {
    setColumns(sort(columns, sourceId, targetId));
  };

  const handleDragRow = (sourceId: string, targetId: string) => {
    setData(sort(paginatedData, sourceId, targetId));
  };

  const CompactCell = (props: RowDataProps) => {
    return <Cell {...props} style={{ marginTop: "10px" }} />;
  };
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);
  const getData = () => {
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
          return (x as number) - (y as number);
        } else {
          return (y as number) - (x as number);
        }
      });
    }
    return data;
  };
  const handleSortColumn = (sortColumn: any, sortType: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        autoHeight
        data={getData()}
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
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        rowKey={rowKey}
        expandedRowKeys={expandedRowKeys}
        renderRowExpanded={RenderRowExpanded}
      >
        {columns.map((column) => (
          <Column
            width={column.width}
            key={column.id}
            flexGrow={column.flexGrow}
            align={column.id === "id" ? "center" : "left"}
            sortable={column.sortable}
          >
            <DraggableHeaderCell onDrag={handleDragColumn} id={column.id}>
              {column.name}
            </DraggableHeaderCell>
            {column.id === "id" ? (
              <ExpandCell
                rowData={column}
                expandedRowKeys={expandedRowKeys}
                onChange={handleExpanded}
              />
            ) : (
              <CompactCell dataKey={column.id} />
            )}
          </Column>
        ))}
      </Table>
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
    </DndProvider>
  );
}
