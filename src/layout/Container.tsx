import styled from "@emotion/styled";

const Wrap = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

function Container({ children, ...rest }: { [key: string]: any }) {
	return <Wrap {...rest}>{children}</Wrap>;
}
export default Container;
