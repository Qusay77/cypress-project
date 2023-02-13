import styled from "@emotion/styled";
import { InputStyleProps } from "../types";

export const InputLayout = `
    height : 40px;
    border-radius : 4px;
    padding : 0px 16px;
    border: 1px solid #E6E6E6;
    outline : none;
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 8px;
  color: #808080;
`;

export const ErrorLabel = styled(Label)`
  color: #d83928;
`;

export const Input = styled.input`
  ${InputLayout}
  ::placeholder {
    color: #b3b3b3;
  }
  width: calc(100% - 32px);
  border: ${(props: InputStyleProps) =>
		props.error ? `1px solid ${props.errorColor}` || "1px solid #D83928;" : ""};
`;

Input.defaultProps = { type: "text" };
