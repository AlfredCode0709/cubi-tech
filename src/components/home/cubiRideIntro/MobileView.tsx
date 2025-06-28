import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

const MobileView: FC = () => {
  return (
    <Stack className={commonStyles.content}>
      <Typography className={commonStyles.title} component={"div"}>
        Heading out somewhere?
        <Typography className={commonStyles.subtitle}>
          Let CubiRide take you to
          <br />
          your destination!
        </Typography>
      </Typography>

      <Avatar
        className={commonStyles.avatar}
        alt={"CubiRide"}
        src={"https://ik.imagekit.io/a1fr3d10/home/block2.svg"}
        variant={"square"}
      />

      <Typography className={commonStyles.descr}>
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
