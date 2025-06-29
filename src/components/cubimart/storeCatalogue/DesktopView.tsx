import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCard from "@/components/common/card/ItemCard";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubimart.module.scss";
import { FC, Fragment, useState } from "react";

const itemsPerPage = 12;

interface DesktopViewProps {
  numberOfStores: number;
}

const DesktopView: FC<DesktopViewProps> = ({ numberOfStores }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(numberOfStores / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfStores - (currentPage - 1) * itemsPerPage
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1
  );

  return (
    <Fragment>
      <Stack className={styles.header}>
        <Typography className={styles.title}>Store Catalogue</Typography>

        {totalPages > 1 && (
          <Box className={commonStyles.paginationColour2}>
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

      <Grid container className={styles.catalogue} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              cardImage={"https://ik.imagekit.io/a1fr3d10/cubimart_light.svg"}
              name={`Store Name ${globalIndex}`}
              price={0}
              brand={"CUBIMart"}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default DesktopView;
