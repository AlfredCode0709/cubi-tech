import ItemCard from "@/components/common/card/ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";

interface ShopListProps {
  numberOfStalls: number;
}

const ShopList: FC<ShopListProps> = ({ numberOfStalls }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={"auto"}>
      {Array.from({ length: numberOfStalls }).map((_, stallIndex) => (
        <SwiperSlide key={stallIndex} style={{ width: 125 }}>
          <ItemCard
            cardImage={
              "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"
            }
            name={`Shop Name ${stallIndex + 1}`}
            price={0}
            brand={'CUBIFood'}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopList;
