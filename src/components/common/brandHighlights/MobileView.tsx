import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { HighlightItem } from "./BrandHighlights";
import { CSSProperties, FC } from "react";

interface MobileViewProps {
  title: string;
  items: HighlightItem[];
}

const MobileView: FC<MobileViewProps> = ({ title, items }) => {
  return (
    <Stack className={commonStyles.stackContainer}>
      <Typography className={commonStyles.title}>{title}</Typography>
      {items.map((item, index) => (
        <Stack
          key={index}
          className={commonStyles.stackRow}
          sx={
            {
              "--borderBottom":
                index !== items.length - 1
                  ? "1px solid var(--divider-color)"
                  : "none",
              "--paddingBottom":
                index !== items.length - 1
                  ? "10%"
                  : "5%",
            } as CSSProperties
          }
        >
          <Avatar
            className={commonStyles.avatar}
            alt={item.alt}
            src={item.src}
            component={"div"}
            variant={"square"}
          />
          <Typography className={commonStyles.itemTitle}>
            {item.title}
          </Typography>
          <Typography className={commonStyles.itemDescr}>
            {item.descr}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default MobileView;
