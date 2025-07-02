import Box from "@mui/material/Box";
import { FC, Fragment, ReactNode } from "react";

interface ResponsiveViewProps {
  desktop: ReactNode;
  mobile: ReactNode;
  desktopClassName?: string;
  mobileClassName?: string;
}

const ResponsiveView: FC<ResponsiveViewProps> = ({
  desktop,
  mobile,
  desktopClassName,
  mobileClassName,
}) => (
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
