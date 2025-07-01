import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "../ResponsiveView";
import { FC, ReactNode } from "react";

interface JoinSectionProps {
  title: string;
  descr: ReactNode;
  buttonText: string;
}

const JoinSection: FC<JoinSectionProps> = ({ title, descr, buttonText }) => {
  return (
    <Box className={'joinSection'}>
      <ResponsiveView
        desktop={
          <DesktopView title={title} descr={descr} buttonText={buttonText} />
        }
        mobile={
          <MobileView title={title} descr={descr} buttonText={buttonText} />
        }
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default JoinSection;
