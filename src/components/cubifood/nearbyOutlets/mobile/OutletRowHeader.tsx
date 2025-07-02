import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

interface OutletRowHeaderProps {
  outletIndex: number;
}

const OutletRowHeader: FC<OutletRowHeaderProps> = ({
  outletIndex,
}) => {
  return (
    <Stack className={styles.outletRowHeader}>
      <Stack className={styles.leftSection}>
        <Avatar
          className={styles.avatar}
          alt="Outlet Logo"
          src="https://ik.imagekit.io/a1fr3d10/cubifood_icon.svg"
        />
        <Typography className={styles.outletName}>
          Outlet Name {outletIndex + 1}
        </Typography>
      </Stack>
      <Stack className={styles.rightSection}>
        <Typography className={styles.distance}>1.99 km</Typography>
        <IconButton className={styles.outletViewButton} size={'small'}>
          <TravelExploreIcon fontSize={'small'}/>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default OutletRowHeader;
