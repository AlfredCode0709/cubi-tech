import Box from "@mui/material/Box";
import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box className={"layout"}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
