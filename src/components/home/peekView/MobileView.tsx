import Typography from "@mui/material/Typography";
import ItemCard from "@/components/common/card/ItemCard";
import Link from "next/link";
import styles from "@/styles/home.module.scss";
import { titleConfig, TitleType } from "./PeekView";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, Fragment } from "react";

interface MobileViewProps {
  title: TitleType;
  totalItems: number;
}

const MobileView: FC<MobileViewProps> = ({ title, totalItems }) => {
  const {
    path: imageSrc,
    color: titleSubColor,
    link,
  } = titleConfig[title] || {
    path: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345140/cubitech_light_qhxj6v.svg",
    color: "#bf3953",
    link: "/",
  };

  const allItems = Array.from({ length: totalItems }, (_, i) => i + 1);

  return (
    <Fragment>
      <Link href={link}>
        <Typography className={styles.title}>
          {title.substring(0, 4)}
          <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
        </Typography>
      </Link>

      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className={styles.carousel}
      >
        {allItems.map((globalIndex) => (
          <SwiperSlide key={globalIndex} style={{ width: 140 }}>
            <ItemCard
              cardImage={imageSrc}
              name={`Item Name ${globalIndex}`}
              price={9.99}
              brand={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default MobileView;
