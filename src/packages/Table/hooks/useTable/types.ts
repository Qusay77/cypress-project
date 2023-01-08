import { RowDataType } from "../../";
import {
	TableColumnsProps,
	ColumnProps,
	RowPropsExternal,
	RowKeyType,
} from "./../../types";
import { PaginationProps } from "rsuite";

type Modify<T, R> = Omit<T, keyof R> & R;
export type ModifiedPaginationProps = Modify<
	PaginationProps,
	{
		total?: number;
	}
>;

export type ExpandComponentProps = ({
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
export interface TableHookProps {
	paginationProps?: ModifiedPaginationProps;
	PaginationComponent?: () => JSX.Element;
	tableProps?: TableColumnsProps;
	columnProps?: ColumnProps;
	rowProps?: RowPropsExternal;
	extendedMethods?: {
		[key: string]: {
			extendFunction(...args: unknown[]): void;
			overwrite?: boolean;
		};
	};
	editableColumns?: string[];
	editableExpanded?: boolean;
	customSort?(...args: unknown[]): RowDataType;
	expandProps?: { columnId: string; ExpandComponent?: ExpandComponentProps };
	CustomSortIcon?: (sortType?: "desc" | "asc") => React.ReactNode;
	CustomHeaderCell?: (column: RowDataType) => JSX.Element;
}
