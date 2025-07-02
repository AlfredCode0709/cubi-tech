import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DesktopOutletSection from "./desktop/DesktopOutletSection";
import MobileOutletSection from "./mobile/MobileOutletSection";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/cubifood.module.scss";
import { FC, Fragment } from "react";

interface NearbyOutletsProps {
  numberOfStalls: number;
}

const NearbyOutlets: FC<NearbyOutletsProps> = ({ numberOfStalls }) => {
  return (
    <Box className={styles.nearbyOutlets}>
      <ResponsiveView
        desktop={
          <Fragment>
            <Typography className={styles.title}>Nearby Outlets</Typography>
            {Array.from({ length: 3 }).map((_, outletIndex) => (
              <DesktopOutletSection
                key={outletIndex}
                numberOfStalls={numberOfStalls}
                outletIndex={outletIndex}
              />
            ))}
          </Fragment>
        }
        mobile={
          <Fragment>
            <Typography className={styles.title}>Nearby Outlets</Typography>
            {Array.from({ length: 3 }).map((_, outletIndex) => (
              <MobileOutletSection
                key={outletIndex}
                numberOfStalls={numberOfStalls}
                outletIndex={outletIndex}
              />
            ))}
          </Fragment>
        }
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default NearbyOutlets;
