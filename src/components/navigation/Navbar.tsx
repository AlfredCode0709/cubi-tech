import Box from "@mui/material/Box";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import ResponsiveView from "@/components/common/ResponsiveView";
import { getBrandByPath } from "@/config/brandConfig";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const Navbar: FC = () => {
  const router = useRouter();
  const brand = getBrandByPath(router.pathname);

  const style: CSSProperties = {
    "--appBarBgColor": brand.appBarBgColor,
  } as CSSProperties;

  return (
    <Box className={"navbarContainer"} sx={style}>
      <ResponsiveView
        desktop={<DesktopNavbar brand={brand} />}
        mobile={<MobileNavbar brand={brand} />}
      />
    </Box>
  );
};

export default Navbar;
