import styled from "styled-components";
import { Button } from "@mui/material";
import { FunctionComponent } from "react";

interface customButtonProps {
  handleState?: () => void;
  label: string;
  icon: JSX.Element;
}

const CustomButton: FunctionComponent<customButtonProps> = ({
  handleState,
  label,
  icon,
}) => {
  return (
    <StyledButton
      size="medium"
      variant="contained"
      sx={{
        backgroundColor: "#4257FF",
      }}
      onClick={handleState}
      endIcon={icon}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  @media (max-width: 380px) {
    width: 90%;
  }
`;

export { CustomButton };
