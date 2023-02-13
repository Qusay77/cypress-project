/* eslint-disable  */
import { FillButton } from "../../login/components/formSectionLayout";
import { HaveAccount } from "../style";
import { useSelector } from "react-redux";
import { RegisterStateTypes } from "../types/registerDataType";
import { useRegisterMutation } from "../api/register";
import moment from "moment-timezone";

const timezone = moment.tz.guess();

const SubmitForm = () => {
  const {
    firstName,
    lastName,
    email,
    password,
    orgName,
    emailValidation,
    passwordValidation,
  } =
    useSelector(({ register }: { register: RegisterStateTypes }) => register) ||
    {};
  const [register, { isLoading }] = useRegisterMutation();
  const handleRegister = async () => {
    const registerRequest = await register({
      firstName,
      lastName,
      email,
      password,
      orgName,
      time_zone: timezone,
    }).unwrap();
    console.log(registerRequest);
  };
  return (
    <>
      <FillButton
        invert={false}
        width={"100%"}
        style={{ fontSize: "14px" }}
        onClick={handleRegister}
      >
        Create my Account
      </FillButton>

      <HaveAccount>
        <p>Already have an Account?</p>
        <p
          style={{ color: "#1D99FF", cursor: "pointer" }}
          onClick={() => {
            window.location.replace("/login");
          }}
        >
          Sign In!
        </p>
      </HaveAccount>
    </>
  );
};

export default SubmitForm;
