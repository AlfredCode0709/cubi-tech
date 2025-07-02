import CubiFoodLogo from "@/icons/CubiFoodLogo";
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
  cubifood: {
    id: "cubifood",
    name: "CubiFood",
    appBarBgColor: "#08834e",
    desktopMainMenuBgColor: "#e7fdf4",
    desktopMainMenuColor: "#08834e",
    desktopMainMenuHoverBgColor: "#b7fadd",
    desktopMainMenuHoverColor: "#066039",
    mobileMainMenuBgColor: "#e7fdf4",
    mobileMainMenuColor: "#08834e",
    footerBgColor: "#066039",
    footerHoverColor: "#cffce8",
    darkLogo: <CubiFoodLogo colorMode="dark" />,
    lightLogo: <CubiFoodLogo colorMode="light" />,
    avatarKey: "cubifood",
  },
};

export const getBrandByPath = (path: string): BrandConfig => {
  if (path.startsWith("/cubifood")) return brands.cubifood;
  return brands.cubitech;
};
