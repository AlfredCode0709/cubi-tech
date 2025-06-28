import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

const CubiRideIntro: FC = () => {
  return (
    <Box className={commonStyles.introSection} bgcolor={"primary.light"}>
      <ResponsiveView
        desktop={<DesktopView />}
        mobile={<MobileView />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default CubiRideIntro;
