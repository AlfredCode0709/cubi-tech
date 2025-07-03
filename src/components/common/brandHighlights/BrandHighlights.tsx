import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

export interface HighlightItem {
  alt: string;
  src: string;
  title: string;
  descr: string;
}

interface BrandHighlightsProps {
  title: string;
  items: HighlightItem[];
}

const BrandHighlights: FC<BrandHighlightsProps> = ({ title, items }) => {
  return (
    <Box className={commonStyles.brandHighlights}>
      <ResponsiveView
        desktop={<DesktopView title={title} items={items} />}
        mobile={<MobileView title={title} items={items} />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default BrandHighlights;
