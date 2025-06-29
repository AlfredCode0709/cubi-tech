import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface SortedAndFilterCatalogueProps {
  imageSrc: string;
  numberOfItems: number | 0;
  brand: string;
}

const SortedAndFilterCatalogue: FC<SortedAndFilterCatalogueProps> = ({
  imageSrc,
  numberOfItems,
  brand,
}) => {
  const paginationColour =
    brand === "CubiFood"
      ? commonStyles.paginationColour1
      : commonStyles.paginationColour2;

  const style: CSSProperties = {
    "--titleColor": brand === "CubiFood" ? "#08834e" : "#c03853",
  } as CSSProperties;

  return (
    <Box className={commonStyles.sortedAndFilteredCatalogue} sx={style}>
      <ResponsiveView
        desktop={
          <DesktopView
            paginationColour={paginationColour}
            imageSrc={imageSrc}
            numberOfItems={numberOfItems}
            brand={brand}
          />
        }
        mobile={
          <MobileView
            imageSrc={imageSrc}
            numberOfItems={numberOfItems}
            brand={brand}
          />
        }
        desktopClassName={'desktop'}
        mobileClassName={'mobile'}
      />
    </Box>
  );
};

export default SortedAndFilterCatalogue;
