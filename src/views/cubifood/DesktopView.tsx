import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/category/Category";
import NearbyOutlets from "@/components/cubifood/nearbyOutlets/NearbyOutlets";
import Promotions from "@/components/common/promotions/Promotions";
import SortFilter from "@/components/common/sortFilter/SortFilter";
import SortedAndFilterCatalogue from "@/components/common/sortedAndFilteredCatalogue/SortedAndFilteredCatalogue";
import StartingBlock2 from "@/components/common/startingBlocks/StartingBlock2";
import Treasures from "@/components/cubifood/treasures/Treasures";
import { categories } from "@/components/cubifood/categories";
import { FC, Fragment, useState } from "react";

const defaultIcon = "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg";
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
      {/* Starting block of CubiFood Page */}
      <StartingBlock2
        bgImage={"https://ik.imagekit.io/a1fr3d10/desktop/cubifood/block1.png"}
      />

      {/* CubiFood slogan block */}
      <BrandSlogan color={"#08834e"}>
        Eat Smart. Pay Easy. Enjoy Every Bite.
      </BrandSlogan>

      {/* Promotions */}
      <Promotions
        header={"Weekly Promotions"}
        title={"Promotion Name"}
        descr={"Description"}
        bgColor={"#e7fef4"}
        color={"#08834e"}
        image={defaultIcon}
      />

      {/* Treasures */}
      <Treasures />

      {/* CUBIFood Category */}
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        primaryColor={"#08834e"}
        bgColor={"#e7fef4"}
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
          brand={"CubiFood"}
        />
      ) : (
        <NearbyOutlets numberOfStalls={10} />
      )}
    </Fragment>
  );
};

export default DesktopView;
