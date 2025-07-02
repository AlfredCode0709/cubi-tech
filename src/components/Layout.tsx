import Box from "@mui/material/Box";
import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";
import ResponsiveView from "./common/ResponsiveView";
import ScrollTopFab from "./common/ScrollTopFab";
import { getBrandByPath } from "@/config/brandConfig";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const brand = getBrandByPath(router.pathname);

  return (
    <Box className={"layout"}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ResponsiveView
        desktop={<ScrollTopFab fabColor={brand.appBarBgColor} />}
        mobile={<ScrollTopFab fabColor={brand.appBarBgColor} />}
      />
    </Box>
  );
};

export default Layout;
