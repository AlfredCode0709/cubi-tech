import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import { FC } from "react";

const HomeDefault: FC = () => {
  return <ResponsiveView desktop={<DesktopView />} mobile={<MobileView />} />;
};

export default HomeDefault;
