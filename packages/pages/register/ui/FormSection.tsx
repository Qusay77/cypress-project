import {
  FormContainer,
  FormLayout,
  HeaderIcon,
  MainTitle,
  SecondaryTitle,
  TermOfUse,
} from "../style";
import Inputs from "./Inputs";
import SubmitForm from "./SubmitForm";

const FormSection = () => {
  return (
    <>
      <FormContainer>
        <FormLayout>
          <HeaderIcon />

          <MainTitle>Create an Account</MainTitle>

          <SecondaryTitle>
            You can sign in to webeyez using email and password, linked in
            account or using your organization single sign on account.
          </SecondaryTitle>

          <Inputs />
          <SubmitForm />
        </FormLayout>
          <TermOfUse>
            <p>By registering to our service, you agree to our </p>
            <span>Terms of Use </span>
            <p>and </p>
            <span>Privacy Policy</span>
          </TermOfUse>
      </FormContainer>
    </>
  );
};

export default FormSection;
