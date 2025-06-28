import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { BrandConfig } from "@/config/brandConfig";
import { navItems } from "@/config/navItems";
import { CSSProperties, FC, Fragment } from "react";

interface MobileMainMenuProps {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
  brand: BrandConfig;
}

const MobileMainMenu: FC<MobileMainMenuProps> = ({
  open,
  toggleDrawer,
  brand,
}) => {
  const style: CSSProperties = {
    "--mobileMainMenuBgColor": brand.mobileMainMenuBgColor,
    "--mobileMainMenuColor": brand.mobileMainMenuColor,
  } as CSSProperties;

  const DrawerList = (
    <Fragment>
      <Toolbar className={"header"}>
        <Link href={"/"} onClick={toggleDrawer(false)}>
          {brand.lightLogo}
        </Link>
      </Toolbar>
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {navItems.map((nav) => (
            <Link key={nav.label} href={nav.href} passHref>
              <ListItem className={"listItem"} onClick={toggleDrawer(false)}>
                <ListItemButton>
                  <ListItemIcon>
                    <Avatar
                      className={"avatar"}
                      alt={nav.label}
                      src={
                        nav.avatars?.[
                          nav.label === "About Us" ? brand.avatarKey : "default"
                        ]
                      }
                      variant={"square"}
                    />
                  </ListItemIcon>
                  <Typography className={"listText"}>{nav.label}</Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Fragment>
  );

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      className={"mobileMainMenu"}
      sx={style}
    >
      {DrawerList}
    </Drawer>
  );
};

export default MobileMainMenu;
