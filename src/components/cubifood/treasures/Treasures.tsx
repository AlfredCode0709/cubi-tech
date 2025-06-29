import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

const Treasures: FC = () => {
  return (
    <Box className={styles.treasures}>
      <ResponsiveView
        desktop={<DesktopView />}
        mobile={<MobileView />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default Treasures;
