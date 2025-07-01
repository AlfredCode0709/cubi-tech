import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

const DesktopView: FC = () => {
  return (
    <Stack className={styles.content}>
      <Box className={styles.left}>
        <Avatar
          className={styles.avatar}
          alt={"CubiRide"}
          src={"https://ik.imagekit.io/a1fr3d10/home/block2.svg"}
          variant={"square"}
        />
      </Box>
      <Box className={styles.right}>
        <Typography className={styles.title} component={"div"}>
          Heading out somewhere?
          <Typography className={styles.subtitle}>
            Let CubiRide take you to your destination!
          </Typography>
        </Typography>

        <Typography className={styles.descr}>
          Elevate Your Journey: From CubiMatch to CubiSuite
        </Typography>

        <Button variant={"contained"} size={"large"} color={"primary"}>
          Learn More
        </Button>
      </Box>
    </Stack>
  );
};

export default DesktopView;
