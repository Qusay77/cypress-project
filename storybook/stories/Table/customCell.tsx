import { CustomCellType } from "@packages/table";
const CustomCell: CustomCellType = ({ rowData, dataKey }) => {
	return <div style={{ color: "red" }}>{rowData?.[dataKey]}</div>;
};

export default CustomCell;
