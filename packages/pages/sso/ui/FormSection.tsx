import { LoginStyle } from "@qusay77/core-style";
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
      <LoginStyle.LoginFormContainer>
        <LoginStyle.LoginFormLayout>
          <LoginStyle.LoginHeaderIcon />

          <LoginStyle.LoginMainTitle>SSO Login</LoginStyle.LoginMainTitle>

          <LoginStyle.LoginSecondaryTitle>
            Please enter your email so we can log you in via SSO, using your
            organization’s credentials.
          </LoginStyle.LoginSecondaryTitle>

          <Inputs />
          <SubmitForm />
        </LoginStyle.LoginFormLayout>
        <LoginStyle.LoginTermOfUse>
          <p>By using our service, you agree to our </p>
          <span>Terms of Use </span>
          <p>and </p>
          <span>Privacy Policy</span>
        </LoginStyle.LoginTermOfUse>
      </LoginStyle.LoginFormContainer>
    </>
  );
};

export default FormSection;
