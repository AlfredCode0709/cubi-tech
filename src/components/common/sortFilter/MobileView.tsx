import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import ActionButtons from "./ActionButtons";
import commonStyles from "@/styles/common.module.scss";
import { SortFilterConfig, SortFilterState } from "./sortFilterVariants";
import { CSSProperties, FC, Fragment, useState } from "react";

interface MobileViewProps {
  sortFilterOptions: SortFilterConfig[];
  categories: { name: string; label: string; src: string }[];
  sortFilter: SortFilterState;
  handleSortFilterChange: (key: keyof SortFilterState, value: string) => void;
  handleApplySortFilter: () => void;
  handleClearSortFilter: () => void;
  anySortFilterSelected: boolean;
  isCubiFood: boolean;
}

const MobileView: FC<MobileViewProps> = ({
  sortFilterOptions,
  categories,
  sortFilter,
  handleSortFilterChange,
  handleApplySortFilter,
  handleClearSortFilter,
  anySortFilterSelected,
  isCubiFood,
}) => {
  const [open, setOpen] = useState(false);

  const radioThemeColor = isCubiFood ? "#08834e" : "#c03853";

  const style: CSSProperties = {
    "--buttonColor": isCubiFood ? "#08834e" : "#c03853",
    "--hover1Color": isCubiFood ? "#e7fef4" : "#f9ebee",
    "--hover2Color": isCubiFood ? "#066039" : "#8a283c",
  } as CSSProperties;

  return (
    <Fragment>
      <Stack className={commonStyles.actionOptions} sx={style}>
        <Button
          size={"small"}
          className={commonStyles.resetButton}
          onClick={() => handleClearSortFilter()}
        >
          Reset
        </Button>
        <Button
          size={"small"}
          variant={"contained"}
          className={commonStyles.sortButton}
          onClick={() => setOpen(true)}
        >
          Sort
        </Button>
      </Stack>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        scroll="paper"
        classes={{
          paper: commonStyles.sortFilterMobileDialogPaper,
          container: commonStyles.sortFilterMobileDialogContainer,
        }}
        sx={style}
      >
        <DialogTitle className={commonStyles.mainFilterMobileDialogTitle}>
          Filter
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            {sortFilterOptions.map(({ label, id, options, dynamic }) => {
              const radioOptions = dynamic
                ? categories.map((cat) => ({
                    value: cat.name,
                    label: cat.label,
                  }))
                : options || [];
              return (
                <FormControl
                  key={id}
                  component="fieldset"
                  className={commonStyles.sortFilterMobileFormControl}
                  sx={{}}
                >
                  <FormLabel
                    component="legend"
                    className={commonStyles.sortFilterMobileFormLabel}
                    sx={{
                      "&.MuiFormLabel-root": {
                        color: radioThemeColor,
                      },
                    }}
                  >
                    {label}
                  </FormLabel>
                  <RadioGroup
                    value={sortFilter[id] || ""}
                    onChange={(e) => handleSortFilterChange(id, e.target.value)}
                  >
                    {radioOptions.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={
                          <Radio
                            size={"small"}
                            sx={{
                              "&.Mui-checked": {
                                color: radioThemeColor,
                              },
                            }}
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              );
            })}
          </Stack>
        </DialogContent>
        <DialogActions className={commonStyles.sortFilterDialogActions}>
          <ActionButtons
            handleClearSortFilter={handleClearSortFilter}
            handleApplySortFilter={() => {
              setOpen(false);
              handleApplySortFilter();
            }}
            anySortFilterSelected={anySortFilterSelected}
            isCubiFood={isCubiFood}
          />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default MobileView;
