import { RowDataType } from "../../";
import {
	TableColumnsProps,
	ColumnProps,
	RowPropsExternal,
} from "./../../types";
import { PaginationProps } from "rsuite";

type Modify<T, R> = Omit<T, keyof R> & R;
export type ModifiedPaginationProps = Modify<
	PaginationProps,
	{
		total?: number;
	}
>;
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
}
