import Grid from "@mui/material/Grid";
import ItemCard from "@/components/common/card/ItemCard";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

interface ShopListProps {
  numberOfStalls?: number;
  stallIndex?: number;
}

const ShopList: FC<ShopListProps> = ({ numberOfStalls, stallIndex = 0 }) => {
  if (numberOfStalls && numberOfStalls > 1) {
    return (
      <Grid container spacing={2} className={styles.content} wrap="nowrap">
        {Array.from({ length: numberOfStalls }).map((_, idx) => (
          <Grid key={idx} sx={{ flex: "0 0 auto", width: 200 }}>
            <ItemCard
              cardImage={
                "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"
              }
              name={`Shop Name ${idx + 1}`}
              price={0}
              brand={'CubiFood'}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} className={styles.content} wrap="nowrap">
      <Grid sx={{ flex: "0 0 auto", width: 200 }}>
        <ItemCard
          // href={"#"}
          cardImage={
            "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"
          }
          name={`Shop Name ${stallIndex + 1}`}
          price={0}
          brand={'CUBIFood'}
          // onClick={() => {}}
        />
      </Grid>
    </Grid>
  );
};

export default ShopList;
