import Typography from "@mui/material/Typography";
import EverydayRides from "./everydayRides/EverydayRides";
import PremiumRides from "./premiumRides/PremiumRides";
import styles from "@/styles/cubiride.module.scss";
import { FC, Fragment } from "react";

const MobileView: FC = () => {
  return (
    <Fragment>
      <Typography className={styles.title}>
        CubiRide:<br/>A Ride for Every Need
      </Typography>

      {/* Everyday Rides */}
      <EverydayRides />

      {/* Premium Rides */}
      <PremiumRides />
    </Fragment>
  );
};

export default MobileView;
