import Typography from "@mui/material/Typography";
import ItemCard from "../card/ItemCard";
import commonStyles from "@/styles/common.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, Fragment } from "react";

interface MobileViewProps {
  imageSrc: string;
  numberOfShops: number | 0;
  numberOfItems: number | 0;
}

const MobileView: FC<MobileViewProps> = ({
  imageSrc,
  numberOfShops,
  numberOfItems,
}) => {
  const allItems = Array.from(
    { length: numberOfShops | numberOfItems },
    (_, i) => i + 1
  );

  return (
    <Fragment>
      <Typography className={commonStyles.title}>Catalogue</Typography>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className={commonStyles.carousel}
      >
        {allItems.map((globalIndex) => (
          <SwiperSlide key={globalIndex} style={{ width: 150 }}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default MobileView;
