import "swiper/css";
import "swiper/css/scrollbar";
import Box from "@mui/material/Box";
import OutletRowHeader from "./OutletRowHeader";
import ShopList from "./ShopList";
import styles from "@/styles/cubifood.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { FC } from "react";

interface OutletSectionProps {
  numberOfStalls: number;
  outletIndex: number;
}

const DesktopOutletSection: FC<OutletSectionProps> = ({
  numberOfStalls,
  outletIndex,
}) => {
  return (
    <Box className={styles.outletSection}>
      <OutletRowHeader outletIndex={outletIndex} />

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={16}
        slidesPerView="auto"
        scrollbar={{ draggable: true, hide: false }}
        className={styles.carousel}
      >
        {Array.from({ length: numberOfStalls }).map((_, stallIndex) => (
          <SwiperSlide key={stallIndex} style={{ width: "auto" }}>
            <ShopList numberOfStalls={1} stallIndex={stallIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default DesktopOutletSection;
