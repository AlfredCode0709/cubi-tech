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
        <Avatar
          className={commonStyles.avatar}
          alt={"CubiRide"}
          src={"https://ik.imagekit.io/a1fr3d10/home/block2.svg"}
          variant={"square"}
        />
      </Box>
      <Box className={commonStyles.right}>
        <Typography className={commonStyles.title} component={"div"}>
          Heading out somewhere?
          <Typography className={commonStyles.subtitle}>
            Let CubiRide take you to your destination!
          </Typography>
        </Typography>

        <Typography className={commonStyles.descr}>
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
