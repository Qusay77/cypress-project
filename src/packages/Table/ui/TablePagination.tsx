import { Pagination, PaginationProps } from "rsuite";

const TablePagination = ({ ...rest }: PaginationProps) => {
	return <Pagination {...rest} />;
};

export default TablePagination;
