import Typography from "@mui/material/Typography";
import ItemCard from "../card/ItemCard";
import commonStyles from "@/styles/common.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, Fragment } from "react";

interface MobileViewProps {
  imageSrc: string;
  numberOfItems: number | 0;
  brand?: string;
}

const MobileView: FC<MobileViewProps> = ({
  imageSrc,
  numberOfItems,
  brand,
}) => {
  const allItems = Array.from({ length: numberOfItems }, (_, i) => i + 1);

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
              name={`Item Name ${globalIndex}`}
              price={9.99}
              brand={brand}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default MobileView;
