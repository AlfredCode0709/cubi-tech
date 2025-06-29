import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiride.module.scss";
import { premiumAvatars } from "./premiumAvatars";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Fragment>
      <Stack className={styles.stackContainer}>
        <Typography className={styles.subtitle}>Premium Rides</Typography>
        <Stack direction="row" className={styles.stackRow}>
          {premiumAvatars.map((avatar, index) => (
            <Stack key={index} className={styles.stackItem}>
              <Avatar
                className={styles.avatar}
                alt={avatar.alt}
                src={avatar.src}
                component={"div"}
                variant={"square"}
              />
              <Typography className={styles.itemTitle}>
                {avatar.title}
              </Typography>
              <Typography className={styles.itemDescr}>
                {avatar.descr}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default DesktopView;
