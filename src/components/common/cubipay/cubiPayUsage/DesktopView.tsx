import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PaymentFlow from "../paymentFlow/PaymentFlow";
import TransactionReplayFlow from "../transactionReplayFlow/TransactionReplayFlow";
import styles from "@/styles/cubipay.module.scss";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Fragment>
      <Typography className={styles.header}>
        How CubiPay Wallet works
      </Typography>
      
      <Stack className={styles.content}>
        <Box className={styles.leftContent}>
          <Typography className={styles.title}>
            Effortless Transactions
          </Typography>
          <Typography className={styles.descr}>
            Easily split the bill after a meal — send or request transfers
            instantly with no fees involved.
          </Typography>
        </Box>
        <Box className={styles.rightContent}>
          <PaymentFlow />
        </Box>
      </Stack>

      <Stack className={styles.content}>
        <Box className={styles.leftContent}>
          <Typography className={styles.title}>Stay in Charge</Typography>
          <Typography className={styles.descr}>
            Get instant payment notifications and access your full transaction
            history anytime in the app.
          </Typography>
        </Box>
        <Box className={styles.rightContent}>
          <TransactionReplayFlow />
        </Box>
      </Stack>
    </Fragment>
  );
};

export default DesktopView;
