import BargainBlitz from "@/components/cubimart/bargainBlitz/BargainBlitz";
import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/category/Category";
import Promotions from "@/components/common/promotions/Promotions";
import SortFilter from "@/components/common/sortFilter/SortFilter";
import SortedAndFilterCatalogue from "@/components/common/sortedAndFilteredCatalogue/SortedAndFilteredCatalogue";
import StoreCatalogue from "@/components/cubimart/storeCatalogue/StoreCatalogue";
import StartingBlock2 from "@/components/common/startingBlocks/StartingBlock2";
import { categories } from "@/components/cubimart/categories";
import { FC, Fragment, useState } from "react";

const defaultIcon = "https://ik.imagekit.io/a1fr3d10/cubimart_light.svg";
const filteredIcon = "https://ik.imagekit.io/a1fr3d10/filtered_icon.svg";

const DesktopView: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [anySortedAndFiltered, setAnySortedAndFiltered] =
    useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>(defaultIcon);

  const handleCategorySelect = (categoryName: string) => {
    const selectedCategoryItem = categories.find(
      (category) => category.name === categoryName
    );
    setAnySortedAndFiltered(true);
    setSelectedCategory(categoryName);
    setImageSrc(selectedCategoryItem ? selectedCategoryItem.src : filteredIcon);
  };

  const handleClearSortFilter = () => {
    setAnySortedAndFiltered(false);
    setSelectedCategory(null);
  };

  return (
    <Fragment>
      {/* Starting block of CubiMart Page */}
      <StartingBlock2
        bgImage={"https://ik.imagekit.io/a1fr3d10/desktop/cubimart/block1.png"}
      />

      {/* CubiMart slogan block */}
      <BrandSlogan color={"#c03853"}>Shop the Beat of Your Life!</BrandSlogan>

      {/* Promotions */}
      <Promotions
        header={"Weekly Promotions"}
        title={"Promotion Name"}
        descr={"Description"}
        bgColor={"#f9ebee"}
        color={"#c03853"}
        image={defaultIcon}
      />

      {/* Bargain Blitz */}
      <BargainBlitz totalItems={18} />

      {/* CUBIMart Category */}
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        primaryColor={"#c03853"}
        bgColor={"#f9ebee"}
      />

      {/* Sort Filter */}
      <SortFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onApplySortFilter={(image, category) => {
          setImageSrc(image);
          setSelectedCategory(category);
          setAnySortedAndFiltered(true);
        }}
        onClearSortFilter={handleClearSortFilter}
      />

      {anySortedAndFiltered ? (
        <SortedAndFilterCatalogue
          key={imageSrc}
          imageSrc={imageSrc}
          numberOfItems={18}
          brand={"CubiMart"}
        />
      ) : (
        <StoreCatalogue numberOfStores={40} />
      )}
    </Fragment>
  );
};

export default DesktopView;
