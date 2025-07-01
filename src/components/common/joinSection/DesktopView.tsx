import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface DesktopViewProps {
  title: string;
  descr: ReactNode;
  buttonText: string;
}

const DesktopView: FC<DesktopViewProps> = ({ title, descr, buttonText }) => {
  return (
    <Stack className={"content"}>
      <Stack className={"left"}>
        <Typography className={"title"}>{title}</Typography>
        <Typography className={"descr"}>{descr}</Typography>
      </Stack>
      <Button
        startIcon={<ArrowForwardIcon />}
        color={"primary"}
        variant={"contained"}
        size={"large"}
      >
        {buttonText}
      </Button>
    </Stack>
  );
};

export default DesktopView;
