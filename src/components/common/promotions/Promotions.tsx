import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface PromotionsProps {
  header?: string;
  title?: string;
  descr?: string;
  bgColor?: string;
  color?: string;
  image?: string;
}

const Promotions: FC<PromotionsProps> = ({
  header,
  title,
  descr,
  bgColor,
  color,
  image,
}) => {
  const style: CSSProperties = {
    "--bgColor": bgColor || "var(--white)",
    "--color": color || "var(--primary-main)",
  } as CSSProperties;

  return (
    <Box className={commonStyles.promotions} sx={style}>
      <ResponsiveView
        desktop={
          <DesktopView
            header={header}
            title={title}
            descr={descr}
            image={image}
          />
        }
        mobile={
          <MobileView
            header={header}
            title={title}
            descr={descr}
            image={image}
          />
        }
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default Promotions;
