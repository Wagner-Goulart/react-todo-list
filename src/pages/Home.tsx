import {FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface HomeProps {
    children: ReactNode
}

const Home: FunctionComponent<HomeProps> = ({ children }) => {
    return <StyledMain>{ children }</StyledMain>
}

const StyledMain = styled("main")`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
  background-color: #4257ff;
`;

export { Home}