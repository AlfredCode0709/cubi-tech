import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface CategoryType {
  name: string;
  label: string;
  text: string;
  mobileText: string;
  src: string;
}

interface CategoryProps {
  categories: CategoryType[];
  selectedCategory: string | null;
  onCategorySelect: (src: string) => void;
  primaryColor?: string;
  bgColor?: string;
}

const Category: FC<CategoryProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  primaryColor,
  bgColor,
}) => {
  const handleCategoryClick = (category: CategoryType) => {
    onCategorySelect(category.name);
  };

  const numCategories = categories.length;
  const gridSize = numCategories === 8 ? 1.5 : 2;

  const formatCategoryName = (name: string) => {
    return <span dangerouslySetInnerHTML={{ __html: name }} />;
  };

  const style: CSSProperties = {
    "--color": `${primaryColor || "var(--primary-main)"}`,
    "--bgColor": `${bgColor || "var(--primary-light)"}`,
  } as CSSProperties;

  return (
    <Box className={commonStyles.category} sx={style}>
      <ResponsiveView
        desktop={
          <DesktopView
            categories={categories}
            selectedCategory={selectedCategory}
            formatCategoryName={formatCategoryName}
            gridSize={gridSize}
            handleCategoryClick={handleCategoryClick}
            primaryColor={primaryColor}
          />
        }
        mobile={
          <MobileView
            categories={categories}
            selectedCategory={selectedCategory}
            formatCategoryName={formatCategoryName}
            handleCategoryClick={handleCategoryClick}
            primaryColor={primaryColor}
          />
        }
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default Category;
