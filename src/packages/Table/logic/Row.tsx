import { dropItem, dropOps, RowProps } from "../types/index";
import { ItemTypes } from "../constants";
import { useRef } from "react";
import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";

const Row = ({ children, onDrag, rowData }: RowProps) => {
	const ref = useRef(null);
	const [{ canDrop }, drop] = useDrop<dropItem, void, dropOps>({
		accept: ItemTypes.ROW,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
		drop(item: { id: string }) {
			onDrag && onDrag(item.id, String(rowData.id));
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.ROW,
		item: { id: rowData.id, type: ItemTypes.ROW },
		collect: (monitor: DragSourceMonitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const isActive = canDrop;

	drag(drop(ref));

	const styles: React.CSSProperties = {
		cursor: "grab",
		opacity: isDragging ? 0.5 : 1,
		background: isActive ? "#ddd" : "",
		width: "100%",
		height: "100%",
		borderTop: isActive ? "2px solid #2589f5" : "",
	};

	return (
		<div ref={ref} style={styles}>
			{children}
		</div>
	);
};

export default Row;
