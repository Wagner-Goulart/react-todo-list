import { FunctionComponent, Fragment } from "react";
import { useTasks } from "../hooks/useTasks";
import { Form } from "../components/Form";
import { Divider, List, ListItem, ListItemText, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { green, red, blueGrey, grey } from "@mui/material/colors";
import styled from "styled-components";
import { CustomIconButton } from "../components/CustomIconButton";

const TodoSection: FunctionComponent = () => {
  const { tasks, todoHandler, handleCheck, handleDelete } = useTasks();

  return (
    <StyledSection>
      <Form todoHandler={todoHandler}></Form>
      <List>
        {tasks.map((task) => {
          return (
            <Fragment key={task.id}>
              <ListItem
                sx={{
                  color: grey[900],
                  textDecoration: task.checked ? "line-through" : "none",
                  fontStyle: task.checked ? "italic" : "normal",
                  backgroundColor: task.checked ? blueGrey[100] : null,
                  opacity: task.checked ? "0.7" : "1",
                }}
              >
                <Checkbox
                  checked={task.checked}
                  onChange={() => handleCheck(task.id)}
                  sx={{
                    color: green[800],
                    "&.Mui-checked": {
                      color: green[600],
                    },
                  }}
                />
                <ListItemText primary={task.task} />
                <CustomIconButton onclick={() => handleDelete(task.id)}>
                  <DeleteIcon
                    sx={{
                      color: red[800],
                    }}
                  />
                </CustomIconButton>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </StyledSection>
  );
};

const StyledSection = styled("section")`
  background-color: #fefefe;
  box-shadow: 2px 3px 10px black;
  max-width: 80vw;
  width: 600px;
  height: 70vh;
  padding: 0.5rem;
  border-radius: 5px;
  overflow: auto;
`;

export { TodoSection };
