import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "../hooks/useForm";
import { CustomTextField } from "./CustamTextField";

interface formProps {
  todoHandler: (task: string) => void;
}

const Form: FunctionComponent<formProps> = ({ todoHandler }) => {
  const { text, handleSubmit, handleChange, handleState, handleKeyPress } =
    useForm(todoHandler);

  return (
    <form onSubmit={handleSubmit}>
      <StyledDiv>
        <CustomTextField
          text={text}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          label="CRIAR UMA TAREFA..."
        />
        <StyledButton
          size="medium"
          variant="contained"
          sx={{
            backgroundColor: "#4257FF",
          }}
          onClick={handleState}
          endIcon={<AddIcon />}
        >
          Adicionar
        </StyledButton>
      </StyledDiv>
    </form>
  );
};

const StyledDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 380px) {
    width: 90%;
  }
`;

export { Form };
