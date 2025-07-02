import Box from "@mui/material/Box";
import OutletRowHeader from "./OutletRowHeader";
import ShopList from "./ShopList";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

interface OutletSectionProps {
  numberOfStalls: number;
  outletIndex: number;
}

const MobileOutletSection: FC<OutletSectionProps> = ({
  numberOfStalls,
  outletIndex,
}) => {
  return (
    <Box className={styles.outletSection}>
      <OutletRowHeader outletIndex={outletIndex} />

      <ShopList numberOfStalls={numberOfStalls} />
    </Box>
  );
};

export default MobileOutletSection;
