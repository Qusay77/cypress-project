import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { Table } from "rsuite";
import { ItemTypes } from "../constants";
import { DraggableHeaderCellComponent } from "../types";
const { HeaderCell } = Table;

const DraggableHeaderCell = ({
	children,
	onDrag,
	id,
	...rest
}: DraggableHeaderCellComponent) => {
	const ref = React.useRef(null);

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: ItemTypes.COLUMN,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
		drop(item: { id: string }) {
			onDrag(item.id, id);
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: "drag",
		item: { id, type: ItemTypes.COLUMN },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const isActive = canDrop && isOver;

	drag(drop(ref));

	const styles: React.CSSProperties = {
		padding: "0.6rem 1rem",
		cursor: "grab",
		opacity: isDragging ? 0 : 1,
		borderLeft: `${isActive ? "2px solid #2589f5" : null}`,
	};

	return (
		<HeaderCell {...rest} style={{ padding: 0 }}>
			<div ref={ref} style={styles}>
				{children}
			</div>
		</HeaderCell>
	);
};

export default DraggableHeaderCell;
