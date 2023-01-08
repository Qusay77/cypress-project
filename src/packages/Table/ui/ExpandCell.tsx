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
	ExpandComponent,
	...props
}: {
	rowData: RowDataType;
	expandedRowKeys: number[];
	onChange: (data: RowDataType) => void;
	rowExpandKey: RowKeyType;
	ExpandComponent?: ({
		rowData,
		expandedRowKeys,
		onChange,
		rowExpandKey,
	}: {
		rowData: RowDataType;
		expandedRowKeys: number[];
		onChange: (data: RowDataType) => void;
		rowExpandKey: RowKeyType;
	}) => JSX.Element;
}) => {
	return (
		<Cell {...props}>
			{ExpandComponent ? (
				<ExpandComponent
					{...{ rowData, expandedRowKeys, onChange, rowExpandKey }}
				/>
			) : (
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
			)}
		</Cell>
	);
};

export default ExpandCell;
