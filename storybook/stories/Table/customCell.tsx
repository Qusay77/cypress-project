import React from "react";

const CustomCell = ({ rowData, dataKey }) => {
	return <div style={{ color: "red" }}>{rowData[dataKey]}</div>;
};

export default CustomCell;
