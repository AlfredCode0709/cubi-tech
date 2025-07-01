import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { BrandConfig } from "@/config/brandConfig";
import { FC, Fragment } from "react";

interface DesktopNavbarProps {
  brand: BrandConfig;
}

const DesktopNavbar: FC<DesktopNavbarProps> = ({ brand }) => {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar className={"appBar"} component={"nav"}>
        <Toolbar>
          <Link href={"/"}>{brand.darkLogo}</Link>
          <Box flexGrow={1} />
          <IconButton
            color={"inherit"}
            edge={"end"}
            sx={{ visibility: "hidden" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default DesktopNavbar;
