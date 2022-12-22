/** @jsxImportSource @emotion/react */
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { Table } from "rsuite";
import { ItemTypes } from "../constants";
import { DraggableHeaderCellComponent, dropItem, dropOps } from "../types";
const { HeaderCell } = Table;
import { TableCellStyle } from "../styles";

const DraggableHeaderCell = ({
	children,
	onDrag,
	id,
	...rest
}: DraggableHeaderCellComponent) => {
	const ref = React.useRef(null);

	const [{ isOver }, drop] = useDrop<dropItem, void, dropOps>({
		accept: ItemTypes.COLUMN,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
		drop(item) {
			onDrag(item.id, id);
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.COLUMN,
		item: { id, type: ItemTypes.COLUMN },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const isActive = isOver;

	drag(drop(ref));

	const styles: React.CSSProperties = {
		cursor: "grab",
		opacity: isDragging ? 0 : 1,
		borderLeft: isActive ? "2px solid #2589f5" : "",
	};
	return (
		<HeaderCell {...rest} css={TableCellStyle}>
			<div ref={ref} style={styles}>
				{children}
			</div>
		</HeaderCell>
	);
};

export default DraggableHeaderCell;
