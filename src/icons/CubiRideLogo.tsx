import Avatar from "@mui/material/Avatar";
import ResponsiveView from "@/components/common/ResponsiveView";
import { FC } from "react";

interface CubiRideLogoProps {
  colorMode: "light" | "dark";
}

const CubiRideLogo: FC<CubiRideLogoProps> = ({ colorMode }) => {
  return (
    <ResponsiveView
      desktop={
        <Avatar
          className={"desktopAvatar"}
          alt={"CubiRide"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubiride_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubiride_light.svg"
          }
          variant={"square"}
        />
      }
      mobile={
        <Avatar
          className={"mobileAvatar"}
          alt={"CubiRide"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubiride_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubiride_light.svg"
          }
          variant={"square"}
        />
      }
    />
  );
};

export default CubiRideLogo;
