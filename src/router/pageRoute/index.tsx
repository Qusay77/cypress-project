import { RouteComponentProps } from "@reach/router";

interface Routes extends RouteComponentProps {
	Component: React.ReactElement;
}

const PageRoute = ({ Component }: Routes) => {
	return Component;
};

export { PageRoute };
