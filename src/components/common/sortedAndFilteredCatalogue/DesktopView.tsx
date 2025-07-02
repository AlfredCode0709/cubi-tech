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
  numberOfItems: number | 0;
  paginationColour: string;
  brand?: string;
}

const itemsPerPage = 12;

const DesktopView: FC<DesktopViewProps> = ({
  imageSrc,
  numberOfItems,
  paginationColour,
  brand,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(numberOfItems / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfItems - (currentPage - 1) * itemsPerPage
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
              name={`Item Name ${globalIndex}`}
              price={9.99}
              brand={brand}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default DesktopView;
