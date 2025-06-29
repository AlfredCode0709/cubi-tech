import Avatar from "@mui/material/Avatar";
import ResponsiveView from "@/components/common/ResponsiveView";
import { FC } from "react";

interface CubiPayLogoProps {
  colorMode: "light" | "dark";
}

const CubiPayLogo: FC<CubiPayLogoProps> = ({ colorMode }) => {
  return (
    <ResponsiveView
      desktop={
        <Avatar
          className={"desktopAvatar"}
          alt={"CubiPay"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubipay_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubipay_light.svg"
          }
          variant={"square"}
        />
      }
      mobile={
        <Avatar
          className={"mobileAvatar"}
          alt={"CubiPay"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubipay_dark.svg"
              : "https://ik.imagekit.io/a1fr3d10/cubipay_light.svg"
          }
          variant={"square"}
        />
      }
    />
  );
};

export default CubiPayLogo;
