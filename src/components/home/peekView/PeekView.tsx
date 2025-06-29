import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

export const titleConfig = {
  CUBIFood: {
    path: "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg",
    color: "#09b96d",
    link: '/cubifood'
  },
  CUBIMart: {
    path: "https://ik.imagekit.io/a1fr3d10/cubimart_light.svg",
    color: "#bf3953",
    link: '/cubimart'
  },
} as const;

export type TitleType = keyof typeof titleConfig;

interface PeekViewProps {
  title: TitleType;
  totalItems: number;
}

const PeekView: FC<PeekViewProps> = ({ title, totalItems }) => {
  return (
    <Box className={styles.peekView}>
      <ResponsiveView
        desktop={<DesktopView title={title} totalItems={totalItems} />}
        mobile={<MobileView title={title} totalItems={totalItems} />}
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default PeekView;
