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
        <Typography
          className={styles.title}
          component={"div"}
          sx={{
            color: "white !important",
          }}
        >
          Get more from Cubitech!
          <Typography className={styles.subtitle}>
            Boost your points with our loyalty program.
          </Typography>
        </Typography>

        <Typography
          className={styles.descr}
          sx={{
            color: "#cee2fd !important",
          }}
        >
          Convert your airline miles to CubiPerk points today!
        </Typography>

        <Button
          className={styles.learnMoreButton}
          variant={"contained"}
          size={"large"}
        >
          Learn More
        </Button>
      </Box>
      <Avatar
        className={styles.avatar}
        alt={"CubiPerk"}
        src={"https://ik.imagekit.io/a1fr3d10/home/block3.svg"}
        variant={"square"}
      />
    </Stack>
  );
};

export default DesktopView;
