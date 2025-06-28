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
    title: "For Developers",
    links: [{ href: "/dev", label: "Developer Portal" }],
  },
];
