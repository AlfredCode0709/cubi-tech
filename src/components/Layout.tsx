import Box from "@mui/material/Box";
import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";
// import ScrollTopFab from "./common/ScrollTopFab";
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";
// import { getBrandByPath } from "@/config/brandConfig";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  // const brand = getBrandByPath(router.pathname);

  return (
    <Box className={"layout"}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ScrollTopFab fabColor={brand.appBarBgColor} />
      </Box> */}
    </Box>
  );
};

export default Layout;
