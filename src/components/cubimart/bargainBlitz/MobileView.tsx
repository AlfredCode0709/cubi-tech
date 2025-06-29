import Typography from "@mui/material/Typography";
import ItemCard from "@/components/common/card/ItemCard";
import styles from "@/styles/cubimart.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, Fragment } from "react";

interface MobileViewProps {
  totalItems: number;
}

const MobileView: FC<MobileViewProps> = ({ totalItems }) => {
  const allItems = Array.from({ length: totalItems }, (_, i) => i + 1);

  return (
    <Fragment>
      <Typography className={styles.title}>Bargain Blitz</Typography>

      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className={styles.carousel}
      >
        {allItems.map((globalIndex) => (
          <SwiperSlide key={globalIndex} style={{ width: 140 }}>
            <ItemCard
              cardImage={"https://ik.imagekit.io/a1fr3d10/cubimart_light.svg"}
              name={`Item Name ${globalIndex}`}
              price={9.99}
              brand={"CUBIMart"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default MobileView;
