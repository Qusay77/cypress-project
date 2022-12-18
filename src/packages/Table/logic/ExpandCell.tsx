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
	rowData: any;
	expandedRowKeys: [number];
	// eslint-disable-next-line @typescript-eslint/ban-types
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
