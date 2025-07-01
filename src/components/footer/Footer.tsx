import Box from "@mui/material/Box";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import ResponsiveView from "@/components/common/ResponsiveView";
import { getBrandByPath } from "@/config/brandConfig";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const Footer: FC = () => {
  const router = useRouter();
  const brand = getBrandByPath(router.pathname);

  const style: CSSProperties = {
    "--footerBgColor": brand.footerBgColor,
    "--hoverColor": brand.footerHoverColor,
  } as CSSProperties;

  return (
    <Box className={"footerContainer"} sx={style}>
      <ResponsiveView desktop={<DesktopFooter />} mobile={<MobileFooter />} />
    </Box>
  );
};

export default Footer;
