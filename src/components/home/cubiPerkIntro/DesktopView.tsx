import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

const DesktopView: FC = () => {
  return (
    <Stack className={commonStyles.content}>
      <Box className={commonStyles.left}>
        <Typography
          className={commonStyles.title}
          component={"div"}
          sx={{
            color: "white !important",
          }}
        >
          Get more from Cubitech!
          <Typography className={commonStyles.subtitle}>
            Boost your points with our loyalty program.
          </Typography>
        </Typography>

        <Typography
          className={commonStyles.descr}
          sx={{
            color: "#cee2fd !important",
          }}
        >
          Convert your airline miles to CubiPerk points today!
        </Typography>

        <Button
          className={commonStyles.learnMoreButton}
          variant={"contained"}
          size={"large"}
        >
          Learn More
        </Button>
      </Box>
      <Avatar
        className={commonStyles.avatar}
        alt={"CubiPerk"}
        src={"https://ik.imagekit.io/a1fr3d10/home/block3.svg"}
        variant={"square"}
      />
    </Stack>
  );
};

export default DesktopView;
