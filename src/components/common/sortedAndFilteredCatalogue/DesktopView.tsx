import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemCard from "../card/ItemCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC, Fragment, useState } from "react";

interface DesktopViewProps {
  imageSrc: string;
  numberOfShops: number | 0;
  numberOfItems: number | 0;
  paginationColour: string;
}

const itemsPerPage = 12;

const DesktopView: FC<DesktopViewProps> = ({
  imageSrc,
  numberOfShops,
  numberOfItems,
  paginationColour,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((numberOfShops | numberOfItems) / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        (numberOfShops | numberOfItems) - (currentPage - 1) * itemsPerPage
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1
  );

  return (
    <Fragment>
      <Stack className={commonStyles.header}>
        <Typography className={commonStyles.title}>Catalogue</Typography>
        {/* Pagination Buttons */}
        {totalPages > 1 && (
          <Box
            className={paginationColour}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(event, page) => setCurrentPage(page)}
              size="large"
              renderItem={(item) => {
                if (item.type === "previous" || item.type === "next") {
                  return (
                    <PaginationItem
                      {...item}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 32,
                        },
                      }}
                    />
                  );
                }
                return null;
              }}
            />
          </Box>
        )}
      </Stack>

      <Grid container className={commonStyles.resultsView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              cardImage={imageSrc}
              name={
                numberOfShops
                  ? `Shop Name ${globalIndex}`
                  : `Item Name ${globalIndex}`
              }
              price={numberOfShops ? 0 : 9.99}
              brand={numberOfShops ? "CUBIFood" : "CUBIMart"}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default DesktopView;
