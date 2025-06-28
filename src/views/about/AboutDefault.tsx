import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/about.module.scss";
import { FC } from "react";

const AboutDefault: FC = () => {
  return (
    <Box className={`${styles.about}`}>
      <ResponsiveView
        desktop={<DesktopView />}
        mobile={<MobileView />}
      />
    </Box>
  );
};

export default AboutDefault;
