import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";

const MobileFooter: FC = () => {
  return (
    <Stack>
      <Box className={"mobileFooterIntroSection"}>
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
    </Stack>
  );
};

export default MobileFooter;
