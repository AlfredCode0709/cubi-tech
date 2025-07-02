import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface ActionButtonsProps {
  handleClearSortFilter: () => void;
  handleApplySortFilter: () => void;
  anySortFilterSelected: boolean;
  isCubiFood: boolean;
}

const ActionButtons: FC<ActionButtonsProps> = ({
  handleClearSortFilter,
  handleApplySortFilter,
  anySortFilterSelected,
  isCubiFood
}) => {
  const style: CSSProperties = {
    "--buttonColor": isCubiFood ? "#08834e" : "#c03853",
    "--hover1Color": isCubiFood ? "#e7fef4" : "#f9ebee",
    "--hover2Color": isCubiFood ? "#066039" : "#8a283c",
  } as CSSProperties;

  return (
    <ResponsiveView
      desktop={
        <Stack className={commonStyles.actionOptions} sx={style}>
          <Button
            size="large"
            onClick={handleClearSortFilter}
            className={commonStyles.clearButton}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleApplySortFilter}
            disabled={!anySortFilterSelected}
            className={commonStyles.applyButton}
          >
            Apply
          </Button>
        </Stack>
      }
      mobile={
        <Stack className={commonStyles.actionOptions} sx={style}>
          <Button
            size="small"
            onClick={handleClearSortFilter}
            className={commonStyles.clearButton}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleApplySortFilter}
            disabled={!anySortFilterSelected}
            className={commonStyles.applyButton}
          >
            Apply
          </Button>
        </Stack>
      }
    />
  );
};

export default ActionButtons;
