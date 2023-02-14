import FormSection from "./FormSection";
import {
	MarketingSectionContainer,
	PageContainer,
	PageSection,
} from "./components/pageLayout";

const Login = ({ isNewPassword }: { isNewPassword: boolean }) => {
	return (
		<PageContainer>
			<PageSection>
				<FormSection isNewPassword={isNewPassword} />
			</PageSection>
			<PageSection>
				<MarketingSectionContainer></MarketingSectionContainer>
			</PageSection>
		</PageContainer>
	);
};

export default Login;
