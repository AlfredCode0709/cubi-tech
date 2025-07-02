import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import {
  sortFilterVariant1,
  sortFilterVariant2,
  SortFilterState,
  SortFilterConfig,
} from "./sortFilterVariants";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const filteredIcon = "https://ik.imagekit.io/a1fr3d10/filtered_icon.svg";

interface SortFilterProps {
  categories: { name: string; label: string; src: string }[];
  selectedCategory: string | null;
  onApplySortFilter: (image: string, category: string | null) => void;
  onClearSortFilter: () => void;
}

const SortFilter: FC<SortFilterProps> = ({
  categories,
  selectedCategory,
  onApplySortFilter,
  onClearSortFilter,
}) => {
  const router = useRouter();
  const sortFilterOptions: SortFilterConfig[] = router.pathname.startsWith(
    "/cubifood"
  )
    ? sortFilterVariant1()
    : sortFilterVariant2();
  const isCubiFood = router.pathname === "/cubifood";

  const initialFilters: SortFilterState = {
    sortBy: "",
    price: "",
    cuisine: "",
    dietaryChoice: "",
    group: "",
    shippingFrom: "",
    shippingOption: "",
  };

  const [sortFilter, setSortFilter] = useState<SortFilterState>(initialFilters);

  const applyCategoryImage = (key: string, value: string): string => {
    const selectedItem = categories.find((category) => category.name === value);
    return selectedItem ? selectedItem.src : filteredIcon;
  };

  const handleSortFilterChange = (
    key: keyof SortFilterState,
    value: string
  ) => {
    setSortFilter((prev) => ({ ...prev, [key]: value }));

    if (key === "cuisine" || key === "group") {
      const image = applyCategoryImage(key, value);
      onApplySortFilter(image, value);
    }
  }

  const handleApplySortFilter = () => {
    const cuisineImage = applyCategoryImage("cuisine", sortFilter.cuisine);
    onApplySortFilter(cuisineImage, sortFilter.cuisine);

    const groupImage = applyCategoryImage("group", sortFilter.group);
    onApplySortFilter(groupImage, sortFilter.group);
  };

  const handleClearSortFilter = () => {
    setSortFilter(initialFilters);
    onClearSortFilter();
  };

  useEffect(() => {
    if (selectedCategory) {
      setSortFilter((prev) => ({
        ...prev,
        cuisine: selectedCategory,
        group: selectedCategory,
      }));
    }
  }, [selectedCategory]);

  const anySortFilterSelected = Object.values(sortFilter).some(
    (value) => value !== ""
  );

  return (
    <Box className={commonStyles.sortFilter}>
      <ResponsiveView
        desktop={
          <DesktopView
            sortFilterOptions={sortFilterOptions}
            categories={categories}
            sortFilter={sortFilter}
            handleSortFilterChange={handleSortFilterChange}
            handleApplySortFilter={handleApplySortFilter}
            handleClearSortFilter={handleClearSortFilter}
            anySortFilterSelected={anySortFilterSelected}
            isCubiFood={isCubiFood}
          />
        }
        mobile={
          <MobileView
            sortFilterOptions={sortFilterOptions}
            categories={categories}
            sortFilter={sortFilter}
            handleSortFilterChange={handleSortFilterChange}
            handleApplySortFilter={handleApplySortFilter}
            handleClearSortFilter={handleClearSortFilter}
            anySortFilterSelected={anySortFilterSelected}
            isCubiFood={isCubiFood}
          />
        }
        desktopClassName={"desktop"}
        mobileClassName={"mobile"}
      />
    </Box>
  );
};

export default SortFilter;
