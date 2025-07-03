import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "@/components/common/ResponsiveView";
import { FC, Fragment } from "react";

const CubiRideDefault: FC = () => {
  return (
    <Fragment>
      <ResponsiveView desktop={<DesktopView />} mobile={<MobileView />} />
    </Fragment>
  );
};

export default CubiRideDefault;
