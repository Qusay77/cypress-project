export interface DraggableHeaderCellComponent {
	children: React.ReactNode;
	onDrag(sourceId: string, targetId: string): void;
	id: string;
}

export interface RowDataProps {
	[key: string]: string | number | [];
}

export interface RowProps {
	children: React.ReactNode;
	onDrag(sourceId: string, targetId: string): void;
	id: string;
	rowData: RowDataProps;
}

type Style = React.CSSProperties;

export interface MainTableProps {
	fakeData: Array<RowDataProps>;
	styles: { cell: Style };
}

export interface dropItem {
	id: string;
}
export interface dropOps {
	canDrop: boolean;
	isOver: boolean;
}
