import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/dev.module.scss";
import { FC } from "react";

const DevDefault: FC = () => {
  return (
    <Box className={styles.dev}>
      <ResponsiveView desktop={<DesktopView />} mobile={<MobileView />} />
    </Box>
  );
};

export default DevDefault;
