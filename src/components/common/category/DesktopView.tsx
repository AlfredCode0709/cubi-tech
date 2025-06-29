import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC, JSX } from "react";

interface CategoryType {
  name: string;
  label: string;
  text: string;
  mobileText: string;
  src: string;
}

interface DesktopViewProps {
  categories: CategoryType[];
  selectedCategory: string | null;
  handleCategoryClick: (category: CategoryType) => void;
  gridSize: number;
  formatCategoryName: (name: string) => JSX.Element;
  primaryColor?: string;
}

const DesktopView: FC<DesktopViewProps> = ({
  categories,
  selectedCategory,
  handleCategoryClick,
  gridSize,
  formatCategoryName,
  primaryColor,
}) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid size={gridSize} key={index}>
          <Box
            className={commonStyles.box}
            onClick={() => handleCategoryClick(category)}
          >
            <Avatar
              className={commonStyles.avatar}
              alt={category.name}
              src={category.src}
              sx={
                {
                  border:
                    selectedCategory === category.name
                      ? `2px solid ${primaryColor || "var(--primary-main)"}`
                      : "none",
                } as CSSProperties
              }
            />
            <Typography className={commonStyles.name}>
              {formatCategoryName(category.text)}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default DesktopView;
