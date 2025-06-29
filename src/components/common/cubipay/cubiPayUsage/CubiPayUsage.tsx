import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/cubipay.module.scss";
import { FC } from "react";

const CubiPayUsage: FC = () => {
  return (
    <Box className={styles.cubiPayUsage}>
      <ResponsiveView
        desktop={<DesktopView />}
        mobile={<MobileView />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default CubiPayUsage;
