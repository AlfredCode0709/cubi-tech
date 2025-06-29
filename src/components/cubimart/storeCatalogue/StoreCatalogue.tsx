import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/cubimart.module.scss";
import { FC } from "react";

interface StoreCatalogueProps {
  numberOfStores: number;
}

const StoreCatalogue: FC<StoreCatalogueProps> = ({ numberOfStores }) => {
  return (
    <Box className={styles.storeCatalogue}>
      <ResponsiveView
        desktop={<DesktopView numberOfStores={numberOfStores} />}
        mobile={<MobileView numberOfStores={numberOfStores} />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default StoreCatalogue;
