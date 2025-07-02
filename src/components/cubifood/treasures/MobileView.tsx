import Typography from "@mui/material/Typography";
import InfoCard from "@/components/common/card/InfoCard";
import styles from "@/styles/cubifood.module.scss";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, Fragment } from "react";

const treasures = [
  { title: "Treasure 1", description: "Treasure Description 1" },
  { title: "Treasure 2", description: "Treasure Description 2" },
  { title: "Treasure 3", description: "Treasure Description 3" },
  { title: "Treasure 4", description: "Treasure Description 4" },
  { title: "Treasure 5", description: "Treasure Description 5" },
  { title: "Treasure 6", description: "Treasure Description 6" },
  { title: "Treasure 7", description: "Treasure Description 7" },
];

const MobileView: FC = () => {
  return (
    <Fragment>
      <Typography className={styles.header}>Top Treasures</Typography>
      <Swiper
        className={styles.carousel}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {treasures.map((treasure, idx) => (
          <SwiperSlide key={idx}>
            <InfoCard
              cardImage={"https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"}
              title={treasure.title}
              descr={treasure.description}
              brand={"CubiFood"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default MobileView;
