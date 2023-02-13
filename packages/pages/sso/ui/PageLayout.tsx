// import { PageContainer } from "../style";
import { LoginStyle } from "@qusay77/core-style";
import FormSection from "./FormSection";
import MarktingSection from "./MarktingSection";
const PageLayout = () => {
	return (
		<LoginStyle.LoginPageContainer>
			<FormSection></FormSection>
			<MarktingSection />
		</LoginStyle.LoginPageContainer>
	);
};

export default PageLayout;
