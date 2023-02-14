import FormSection from "./FormSection";
import {
	MarketingSectionContainer,
	PageContainer,
	PageSection,
} from "./components/pageLayout";
import MediaQuery from "react-responsive";
const Login = ({ isNewPassword }: { isNewPassword: boolean }) => {
	return (
		<PageContainer>
			<PageSection>
				<FormSection isNewPassword={isNewPassword} />
			</PageSection>
			<MediaQuery minWidth={768}>
				<PageSection>
					<MarketingSectionContainer></MarketingSectionContainer>
				</PageSection>
			</MediaQuery>
		</PageContainer>
	);
};

export default Login;
