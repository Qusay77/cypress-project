import { IconButton, Table } from "rsuite";
import CollaspedOutlineIcon from "@rsuite/icons/CollaspedOutline";
import ExpandOutlineIcon from "@rsuite/icons/ExpandOutline";

const rowKey = "id";
const { Cell } = Table;
const ExpandCell = ({
	rowData,
	expandedRowKeys,
	onChange,
	...props
}: {
  rowData: {[key: string] : string | number};
  expandedRowKeys: [number];
  onChange: (arg1: {[key: string] : string | number}) => void;
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
