import { PageContainer } from "../style";
import FormSection from "./FormSection";
import MarktingSection from "./MarktingSection";
const PageLayout = () => {
  return (
    <PageContainer>
      <FormSection></FormSection>
      <MarktingSection />
    </PageContainer>
  );
};

export default PageLayout;
