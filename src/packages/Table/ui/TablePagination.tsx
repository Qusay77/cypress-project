import { Pagination, PaginationProps } from "rsuite";

const TablePagination = ({
	maxButtons = 5,
	size = "xs",
	layout = ["-", "limit", "|", "pager", "skip"],
	limitOptions = [10, 30, 50],
	...rest
}: PaginationProps) => {
	return (
		<Pagination
			maxButtons={maxButtons}
			size={size}
			layout={layout}
			limitOptions={limitOptions}
			{...rest}
		/>
	);
};

export default TablePagination;
