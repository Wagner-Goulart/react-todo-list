import {
  useState,
  FunctionComponent,
  FormEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface formProps {
  todoHandler: (task: string) => void;
}

const Form: FunctionComponent<formProps> = ({ todoHandler }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleState = () => {
    if (!text) {
      return;
    }

    todoHandler(text);
    setText("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter") {
      setText(e.currentTarget.value);
      handleState();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledDiv>
        <TextField
          size="small"
          variant="standard"
          color="secondary"
          sx={{
            width: "90%",
            maxWidth: "500px",
          }}
          label="CRIAR UMA TAREFA..."
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={text}
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
