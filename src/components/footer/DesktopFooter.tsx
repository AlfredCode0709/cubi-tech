import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";

const DesktopFooter: FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={3}>
        <Box className={"desktopFooterIntroSection"}>
          <Link href={"/"}>
            <Typography className={"cubitechLogo"}>CUBITECH</Typography>
          </Link>

          <Typography className={"address"}>
            12 Marina Blvd, <br />
            Singapore 018982
          </Typography>

          <Typography className={"sloganText"}>
            Stay connected with us <br />
            for latest updates!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DesktopFooter;
