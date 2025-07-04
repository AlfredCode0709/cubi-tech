export type FooterLinkItem = {
  label: string;
  href?: string;
};

export type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

export const footerSections: FooterSection[] = [
  {
    title: "Get to Know Us",
    links: [{ label: "About Us", href: "/about" }],
  },
  {
    title: "Consumers",
    links: [
      { label: "CubiFood", href: "/cubifood" },
      { label: "CubiMart", href: "/cubimart" },
      { label: "CubiRide", href: "/cubiride" },
    ],
  },
  {
    title: "For Developers",
    links: [{ href: "/dev", label: "Developer Portal" }],
  },
];
