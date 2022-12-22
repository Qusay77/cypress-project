interface Style {
  [key: string]: {
    [key: string]: any;
  };
}

export interface InputDataObject {
  [key: string]: string | number | [];
}

type InputTypes = "text" | "password" | "dropDown";

export interface InputProps {
  type: InputTypes;
  value: string | number;
  setValue: () => void;
  data?: Array<InputDataObject>;
  styles?: Style;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  placeholder?: string;
  children?: JSX.Element;
  isOpen: boolean;
  setOpen: () => void;
}

export interface InputStyleProps {
  error?: boolean;
  errorColor?: string;
}
