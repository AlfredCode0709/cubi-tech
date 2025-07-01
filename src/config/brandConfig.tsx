import CubitechLogo from "@/icons/CubitechLogo";
import { ReactNode } from "react";

export interface BrandConfig {
  id: string;
  name: string;
  appBarBgColor: string;
  desktopMainMenuBgColor: string;
  desktopMainMenuColor: string;
  desktopMainMenuHoverBgColor: string;
  desktopMainMenuHoverColor: string;
  mobileMainMenuBgColor: string;
  mobileMainMenuColor: string;
  footerBgColor: string;
  footerHoverColor: string;
  darkLogo: ReactNode;
  lightLogo: ReactNode;
  avatarKey: string;
}

export const brands: Record<string, BrandConfig> = {
  cubitech: {
    id: "cubitech",
    name: "Cubitech",
    appBarBgColor: "var(--primary-main)",
    desktopMainMenuBgColor: "var(--primary-light)",
    desktopMainMenuColor: "var(--primary-main)",
    desktopMainMenuHoverBgColor: "#b7d1fa",
    desktopMainMenuHoverColor: "var(--primary-dark)",
    mobileMainMenuBgColor: "var(--primary-light)",
    mobileMainMenuColor: "var(--primary-main)",
    footerBgColor: "var(--primary-dark)",
    footerHoverColor: "#b5d4fc",
    darkLogo: <CubitechLogo colorMode="dark" />,
    lightLogo: <CubitechLogo colorMode="light" />,
    avatarKey: "cubitech",
  },
};

export const getBrandByPath = (path: string): BrandConfig => {
  return brands.cubitech;
};
