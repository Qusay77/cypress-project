import { IconButton, Table } from "rsuite";
import CollaspedOutlineIcon from "@rsuite/icons/CollaspedOutline";
import ExpandOutlineIcon from "@rsuite/icons/ExpandOutline";
import { RowDataProps } from "../types";

const rowKey = "id";
const { Cell } = Table;
const ExpandCell = ({
	rowData,
	dataKey,
	expandedRowKeys,
	onChange,
	...props
}: {
  rowData: any;
  dataKey: string;
  expandedRowKeys: [number];
  onChange: Function;
}) => (
	<Cell {...props} style={{ marginTop: "2px" }}>
		<IconButton
			appearance="subtle"
			onClick={() => {
				onChange(rowData);
			}}
			icon={
				expandedRowKeys.some((key: number) => key === rowData[rowKey]) ? (
					<CollaspedOutlineIcon />
				) : (
					<ExpandOutlineIcon />
				)
			}
		/>
	</Cell>
);

export default ExpandCell;
