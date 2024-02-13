import { IconButton } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface customIconButtonProps {
    onclick: () => void;
    children: ReactNode
}

const CustomIconButton: FunctionComponent<customIconButtonProps> = ({onclick, children}) => {
  return (
    <IconButton onClick={onclick}>
     {children}
    </IconButton>
  );
};

export { CustomIconButton }