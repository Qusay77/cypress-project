import FormSection from "./FormSection";
import {
	MarketingSectionContainer,
	PageContainer,
	PageSection,
} from "./components/pageLayout";
import { Global, css } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "@qusay77/core-store";

const GlobalStyles = css`
	@import url("https://fonts.googleapis.com/css?family=Inter");
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap");
	body {
		font-family: Inter;
	}
	p {
		margin: 0;
	}
`;

const Login = ({ isNewPassword }: { isNewPassword: boolean }) => {
	return (
		<Provider store={store}>
			<PageContainer>
				<Global styles={GlobalStyles} />
				<PageSection>
					<FormSection isNewPassword={isNewPassword} />
				</PageSection>
				<PageSection>
					<MarketingSectionContainer></MarketingSectionContainer>
				</PageSection>
			</PageContainer>
		</Provider>
	);
};

export default Login;
