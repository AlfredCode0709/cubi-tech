import Box from "@mui/material/Box";
import { Fragment, ReactNode } from "react";

interface ResponsiveViewProps {
  desktop: ReactNode;
  mobile: ReactNode;
  desktopClassName?: string;
  mobileClassName?: string;
}

const ResponsiveView = ({
  desktop,
  mobile,
  desktopClassName,
  mobileClassName,
}: ResponsiveViewProps) => (
  <Fragment>
    <Box
      className={desktopClassName}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      {desktop}
    </Box>
    <Box
      className={mobileClassName}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      {mobile}
    </Box>
  </Fragment>
);

export default ResponsiveView;
