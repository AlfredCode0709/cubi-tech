import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ActionButtons from "./ActionButtons";
import { SortFilterConfig, SortFilterState } from "./sortFilterVariants";
import { CSSProperties, FC } from "react";

interface DesktopViewProps {
  sortFilterOptions: SortFilterConfig[];
  categories: { name: string; label: string; src: string }[];
  sortFilter: SortFilterState;
  handleSortFilterChange: (key: keyof SortFilterState, value: string) => void;
  handleApplySortFilter: () => void;
  handleClearSortFilter: () => void;
  anySortFilterSelected: boolean;
  isCubiFood: boolean;
}

const DesktopView: FC<DesktopViewProps> = ({
  sortFilterOptions,
  categories,
  sortFilter,
  handleSortFilterChange,
  handleApplySortFilter,
  handleClearSortFilter,
  anySortFilterSelected,
  isCubiFood,
}) => {
  const menuItemSelectedColor = isCubiFood
    ? "#cffce8 !important"
    : "#f4d7dd !important";
  const menuItemHoverColor = isCubiFood ? "#e7fef4" : "#f9ebee";

  const style: CSSProperties = {
    "--selectThemeColor": isCubiFood ? "#08834e" : "#c03853",
  } as CSSProperties;

  return (
    <Grid container spacing={1} alignItems={"center"}>
      {sortFilterOptions.map(({ label, id, options, dynamic, size }) => (
        <Grid size={size} key={id}>
          <FormControl sx={style} fullWidth>
            <InputLabel id={`${id}Label`}>{label}</InputLabel>
            <Select
              labelId={`${id}Label`}
              id={`${id}Select`}
              value={sortFilter[id]}
              label={label}
              onChange={(e) => handleSortFilterChange(id, e.target.value)}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              {(dynamic
                ? categories.map((category) => ({
                    value: category.name,
                    label: category.label,
                  }))
                : options
              )?.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    "&:hover": { bgcolor: menuItemHoverColor },
                    "&.Mui-selected": { bgcolor: menuItemSelectedColor },
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}

      <Grid size={4}>
        <ActionButtons
          handleClearSortFilter={handleClearSortFilter}
          handleApplySortFilter={handleApplySortFilter}
          anySortFilterSelected={anySortFilterSelected}
          isCubiFood={isCubiFood}
        />
      </Grid>
    </Grid>
  );
};

export default DesktopView;
