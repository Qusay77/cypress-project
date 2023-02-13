/* eslint-disable  */
import { InputFieldsContainer, InputNameContainer } from "../style";
import { InputCore } from "@qusay77/core-input";
import { inputTheme } from "../theme/inputTheme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterStateTypes } from "../types/registerDataType";
import { actions } from "../data/registerData";

const Inputs = () => {
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
  const dispatch = useDispatch();
  const { setFirstName, setLastName, setEmail, setPassword, setOrgName } =
    actions;

  const [inputNameWidth, setInputNameWidth] = useState("40%");

  const handleWindowSizeChange = () => {
    if (window.innerWidth <= 550) {
      setInputNameWidth("100%");
      return;
    }
    setInputNameWidth("40%");
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <InputFieldsContainer>
      <InputNameContainer>
        <InputCore
          error={false}
          errorMessage="Invalid First Name"
          type="text"
          label="First Name"
          placeholder="First Name"
          styles={{
            ...inputTheme,
            input: {
              ...inputTheme.input,
              minWidth: "182.5px",
              width: inputNameWidth,
            },
          }}
          value={firstName}
          setValue={(val) => dispatch(setFirstName(val))}
        ></InputCore>

        <InputCore
          error={false}
          errorMessage="Invalid Last Name"
          type="text"
          label="Last Name"
          placeholder="Last Name"
          styles={{
            ...inputTheme,
            input: {
              ...inputTheme.input,
              minWidth: "182.5px",
              width: inputNameWidth,
            },
          }}
          value={lastName}
          setValue={(val) => dispatch(setLastName(val))}
        ></InputCore>
      </InputNameContainer>

      <InputCore
        error={false}
        errorMessage="Invalid Organization Name"
        type="text"
        label="Organization Name"
        placeholder="Organization Name"
        value={orgName}
        setValue={(val) => dispatch(setOrgName(val))}
      ></InputCore>

      <InputCore
        error={false}
        errorMessage="Invalid Email Format"
        type="text"
        label="Email Address"
        placeholder="Email Address"
        value={email}
        setValue={(val) => dispatch(setEmail(val))}
      ></InputCore>

      <InputCore
        type="password"
        label="Password"
        placeholder="Enter your Password"
        value={password}
        setValue={(val) => dispatch(setPassword(val))}
      ></InputCore>
    </InputFieldsContainer>
  );
};

export default Inputs;
