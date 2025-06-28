import Dialog from "@mui/material/Dialog";
import Content from "./Content";
import ResponsiveView from "@/components/common/ResponsiveView";
import styles from "@/styles/home.module.scss";
import { FC, useEffect, useState } from "react";

const WelcomeDialog: FC = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem("seenWelcomeDialog");
    if (!hasSeenDialog) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("seenWelcomeDialog", "true");
  };

  return (
    <ResponsiveView
      desktop={
        <Dialog
          open={open}
          onClose={handleClose}
          className={styles.welcomeDialogDesktop}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Content onClose={handleClose} buttonSize="medium" />
        </Dialog>
      }
      mobile={
        <Dialog
          open={open}
          onClose={handleClose}
          className={styles.welcomeDialogMobile}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Content onClose={handleClose} buttonSize="small" />
        </Dialog>
      }
    />
  );
};

export default WelcomeDialog;
