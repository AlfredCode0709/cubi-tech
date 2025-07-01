import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface MobileViewProps {
  title: string;
  descr: ReactNode;
  buttonText: string;
}

const MobileView: FC<MobileViewProps> = ({ title, descr, buttonText }) => {
  return (
    <Stack className={"content"}>
      <Typography className={"title"}>{title}</Typography>
      <Typography className={"descr"}>{descr}</Typography>
      <Button color={"primary"} variant={"contained"}>
        {buttonText}
      </Button>
    </Stack>
  );
};

export default MobileView;
