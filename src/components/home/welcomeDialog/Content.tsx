import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "@/styles/home.module.scss";
import { FC, Fragment } from "react";

export const Content: FC<{
  onClose: () => void;
  buttonSize?: "small" | "medium";
}> = ({ onClose, buttonSize = "medium" }) => (
  <Fragment>
    <DialogTitle className={styles.dialogTitle}>
      Cubitech: Project Showcase
    </DialogTitle>
    <DialogContent>
      <Typography className={styles.text}>
        Welcome to my regularly updated portfolio.
        <br />
        Explore the{" "}
        <Link className={styles.link} href={"/dev"}>
          Developer Portal
        </Link>{" "}
        for the latest developments.
      </Typography>
    </DialogContent>
    <DialogActions className={styles.dialogActions}>
      <Button onClick={onClose} color="primary" size={buttonSize}>
        OK
      </Button>
    </DialogActions>
  </Fragment>
);

export default Content;
