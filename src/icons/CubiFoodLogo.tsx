import Avatar from "@mui/material/Avatar";
import ResponsiveView from "@/components/common/ResponsiveView";
import { FC } from "react";

interface CubiFoodLogoProps {
  colorMode: "light" | "dark";
}

const CubiFoodLogo: FC<CubiFoodLogoProps> = ({ colorMode }) => {
  return (
    <ResponsiveView
      desktop={
        <Avatar
          className={"desktopAvatar"}
          alt={"CubiFood"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubifood_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"
          }
          variant={"square"}
        />
      }
      mobile={
        <Avatar
          className={"mobileAvatar"}
          alt={"CubiFood"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubifood_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"
          }
          variant={"square"}
        />
      }
    />
  );
};

export default CubiFoodLogo;
