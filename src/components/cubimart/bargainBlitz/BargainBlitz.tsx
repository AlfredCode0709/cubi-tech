import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/cubimart.module.scss";
import { FC } from "react";

interface BargainBlitzProps {
  totalItems: number;
}

const BargainBlitz: FC<BargainBlitzProps> = ({ totalItems }) => {
  return (
    <Box className={styles.bargainBlitz}>
      <ResponsiveView
        desktop={<DesktopView totalItems={totalItems} />}
        mobile={<MobileView totalItems={totalItems} />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default BargainBlitz;
