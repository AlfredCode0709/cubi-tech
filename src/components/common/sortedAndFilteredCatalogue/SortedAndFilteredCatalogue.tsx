import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface SortedAndFilterCatalogueProps {
  imageSrc: string;
  numberOfShops: number | 0;
  numberOfItems: number | 0;
}

const SortedAndFilterCatalogue: FC<SortedAndFilterCatalogueProps> = ({
  imageSrc,
  numberOfShops,
  numberOfItems,
}) => {
  const paginationColour =
    numberOfShops !== 0
      ? commonStyles.paginationColour1
      : commonStyles.paginationColour2;

  const style: CSSProperties = {
    "--titleColor": numberOfShops !== 0 ? "#08834e" : "#c03853",
  } as CSSProperties;

  return (
    <Box className={commonStyles.sortedAndFilteredCatalogue} sx={style}>
      <ResponsiveView
        desktop={
          <DesktopView
            paginationColour={paginationColour}
            imageSrc={imageSrc}
            numberOfShops={numberOfShops}
            numberOfItems={numberOfItems}
          />
        }
        mobile={
          <MobileView
            imageSrc={imageSrc}
            numberOfShops={numberOfShops}
            numberOfItems={numberOfItems}
          />
        }
        desktopClassName={'desktop'}
        mobileClassName={'mobile'}
      />
    </Box>
  );
};

export default SortedAndFilterCatalogue;
