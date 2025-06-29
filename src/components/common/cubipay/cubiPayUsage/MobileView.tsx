import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubipay.module.scss";
import { FC } from "react";

const MobileView: FC = () => {
  return (
    <Stack className={styles.stackContainer}>
      <Typography className={styles.header}>
        How CubiPay Wallet works
      </Typography>

      <Stack className={styles.content}>
        <Typography className={styles.title}>
          Effortless Transactions
        </Typography>
        <Typography className={styles.descr}>
          Easily split the bill after a meal — send or request transfers
          instantly with no fees involved.
        </Typography>
      </Stack>

      <Stack className={styles.content}>
        <Typography className={styles.title}>Stay in Charge</Typography>
        <Typography className={styles.descr}>
          Get instant payment notifications and access your full transaction
          history anytime in the app.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MobileView;
