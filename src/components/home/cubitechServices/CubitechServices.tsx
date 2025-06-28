import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

const CubitechServices: FC = () => {
  return (
    <Box className={styles.cubitechServices}>
      <ResponsiveView
        desktop={<DesktopView />}
        mobile={<MobileView />}
        desktopClassName={'desktop'}
        mobileClassName={'mobile'}
      />
    </Box>
  );
};

export default CubitechServices;
