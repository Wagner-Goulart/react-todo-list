import { TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent, KeyboardEvent } from "react";

interface textFieldProps {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  text?: string;
  label?: string;
}

const CustomTextField: FunctionComponent<textFieldProps> = ({
  handleChange,
  handleKeyPress,
  text,
  label,
}) => {
  return (
    <TextField
      size="small"
      variant="standard"
      color="secondary"
      sx={{
        width: "90%",
        maxWidth: "500px",
      }}
      label={label}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      value={text}
    />
  );
};

export { CustomTextField };
