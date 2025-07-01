import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

const MobileView: FC = () => {
  return (
    <Stack className={styles.content}>
      <Typography className={styles.title} component={"div"}>
        Heading out somewhere?
        <Typography className={styles.subtitle}>
          Let CubiRide take you to
          <br />
          your destination!
        </Typography>
      </Typography>

      <Avatar
        className={styles.avatar}
        alt={"CubiRide"}
        src={"https://ik.imagekit.io/a1fr3d10/home/block2.svg"}
        variant={"square"}
      />

      <Typography className={styles.descr}>
        Elevate Your Journey:
        <br />
        From CubiMatch to CubiSuite
      </Typography>

      <Button variant={"contained"} color={"primary"}>
        Learn More
      </Button>
    </Stack>
  );
};

export default MobileView;
