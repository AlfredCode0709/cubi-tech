import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ResponsiveView from "./ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { FC, ReactNode } from "react";

interface MissionStatementProps {
  children: ReactNode;
}

const MissionStatement: FC<MissionStatementProps> = ({ children }) => {
  return (
    <Box className={commonStyles.missionStatement}>
      <ResponsiveView
        desktop={
          <Typography className={commonStyles.text}>{children}</Typography>
        }
        mobile={
          <Typography className={commonStyles.text}>{children}</Typography>
        }
      />
    </Box>
  );
};

export default MissionStatement;
