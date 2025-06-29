import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/cubiride.module.scss";
import { FC } from "react";

const PremiumRides: FC = () => {
  return (
    <Box className={styles.premiumRides}>
      <ResponsiveView desktop={<DesktopView />} mobile={<MobileView />} />
    </Box>
  );
};

export default PremiumRides;
