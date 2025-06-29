import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { HighlightItem } from "./BrandHighlights";
import { FC } from "react";

interface DesktopViewProps {
  title: string;
  items: HighlightItem[];
}

const DesktopView: FC<DesktopViewProps> = ({ title, items }) => {
  return (
    <Stack className={commonStyles.stackContainer}>
      <Typography className={commonStyles.title}>{title}</Typography>
      <Stack className={commonStyles.stackRow}>
        {items.map((item, index) => (
          <Stack key={index} className={commonStyles.stackItem}>
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
    </Stack>
  );
};

export default DesktopView;
