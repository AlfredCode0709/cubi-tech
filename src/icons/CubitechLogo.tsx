import Avatar from "@mui/material/Avatar";
import ResponsiveView from "@/components/common/ResponsiveView";
import { FC } from "react";

interface CubitechLogoProps {
  colorMode: "light" | "dark";
}

const CubitechLogo: FC<CubitechLogoProps> = ({ colorMode }) => {
  return (
    <ResponsiveView
      desktop={
        <Avatar
          className={"desktopAvatar"}
          alt={"Cubitech"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubitech_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubitech_light.svg"
          }
          variant={"square"}
        />
      }
      mobile={
        <Avatar
          className={"mobileAvatar"}
          alt={"Cubitech"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubitech_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubitech_light.svg"
          }
          variant={"square"}
        />
      }
    />
  );
};

export default CubitechLogo;
