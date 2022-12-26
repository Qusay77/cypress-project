import { ChangeEvent, useState } from "react";
import handleInputChange from "../logic/handleInputChange";
import { InputProps } from "../types";
import { PasswordIcon } from "./PasswordIcon";
import { Input } from "../styles";

export default function Password({
  value,
  setValue,
  error,
  styles,
}: {
  value: InputProps["value"];
  setValue: InputProps["setValue"];
  error?: boolean;
  styles: InputProps["styles"];
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div style={{ position: "relative", display: "flex", width: "100%" }}>
        {showPassword ? (
          <Input
            style={{ ...styles?.input, width: "-webkit-fill-available" }}
            error={error}
            value={value}
            errorColor={styles?.error?.color}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(event, setValue);
            }}
          />
        ) : (
          <Input
            style={{ ...styles?.input, width: "-webkit-fill-available" }}
            type="password"
            errorColor={styles?.error?.color}
            error={error}
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(event, setValue);
            }}
          />
        )}

        <button
          style={{
            all: "unset",
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "12px",
          }}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          <PasswordIcon show={showPassword} />
        </button>
      </div>
    </>
  );
}
