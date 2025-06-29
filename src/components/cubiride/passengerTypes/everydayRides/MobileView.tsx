import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiride.module.scss";
import { everydayAvatars } from "./everydayAvatars";
import { CSSProperties, FC } from "react";

const MobileView: FC = () => {
  return (
    <Stack className={styles.stackContainer}>
      <Typography className={styles.subtitle}>Everyday Rides</Typography>
      {everydayAvatars.map((avatar, index) => (
        <Stack
          key={index}
          direction="row"
          className={styles.stackRow}
          sx={
            {
              "--borderBottom":
                index !== everydayAvatars.length - 1
                  ? "1px solid var(--divider-color)"
                  : "none",
              "--paddingBottom":
                index !== everydayAvatars.length - 1 ? "10%" : "5%",
            } as CSSProperties
          }
        >
          <Avatar
            className={styles.avatar}
            alt={avatar.alt}
            src={avatar.src}
            component={"div"}
            variant={"square"}
          />
          <Typography className={styles.itemTitle}>{avatar.title}</Typography>
          <Typography className={styles.itemDescr}>{avatar.descr}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default MobileView;
