import { InputFieldsContainer, InputNameContainer } from "../style";
import { InputCore } from "@qusay77/core-input";
import { inputTheme } from "../theme/inputTheme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterStateTypes } from "../types/registerDataType";
import { actions } from "../data/registerData";

const Inputs = () => {
  const { orgName } =
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
      <InputCore
        error={false}
        errorMessage="Invalid Organization Name"
        type="text"
        label="Organization Name"
        placeholder="Organization Name"
        value={orgName}
        setValue={(val) => dispatch(setOrgName(val))}
      ></InputCore>
    </InputFieldsContainer>
  );
};

export default Inputs;
