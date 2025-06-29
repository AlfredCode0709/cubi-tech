import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/cubiride.module.scss";
import { FC } from "react";

const PassengerTypes: FC = () => {
  return (
    <Box className={styles.passengerTypes}>
      <ResponsiveView
        desktop={<DesktopView />}
        mobile={<MobileView />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default PassengerTypes;
