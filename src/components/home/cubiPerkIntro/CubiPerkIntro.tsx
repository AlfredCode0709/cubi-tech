import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

const CubiPerkIntro: FC = () => {
  return (
    <Box className={styles.introSection} bgcolor={"primary.main"}>
      <ResponsiveView
        desktop={<DesktopView />}
        mobile={<MobileView />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default CubiPerkIntro;
