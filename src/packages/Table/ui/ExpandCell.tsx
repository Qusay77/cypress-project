import { IconButton, Table } from "rsuite";
import CollapsedOutlineIcon from "@rsuite/icons/CollaspedOutline";
import ExpandOutlineIcon from "@rsuite/icons/ExpandOutline";
import { RowDataType, RowKeyType } from "../types";
const { Cell } = Table;
const ExpandCell = ({
	rowData,
	expandedRowKeys,
	onChange,
	rowExpandKey,
	...props
}: {
	rowData: RowDataType;
	expandedRowKeys: number[];
	onChange: (data: RowDataType) => void;
	rowExpandKey: RowKeyType;
}) => {
	return (
		<Cell {...props} style={{ marginTop: "2px" }}>
			<IconButton
				appearance="subtle"
				onClick={() => {
					onChange(rowData);
				}}
				icon={
					expandedRowKeys.some(
						(key: number) => key === rowData[rowExpandKey],
					) ? (
							<CollapsedOutlineIcon />
						) : (
							<ExpandOutlineIcon />
						)
				}
			/>
		</Cell>
	);
};

export default ExpandCell;
