/* eslint-disable  */
import { InputFieldsContainer, InputNameContainer } from "../style";
import { InputCore } from "@qusay77/core-input";
import { useDispatch, useSelector } from "react-redux";
import { RegisterStateTypes } from "../types/registerDataType";
import { actions } from "../data/registerData";

const Inputs = () => {
  const { orgName } =
    useSelector(({ register }: { register: RegisterStateTypes }) => register) ||
    {};
  const dispatch = useDispatch();
  const { setOrgName } = actions;

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
