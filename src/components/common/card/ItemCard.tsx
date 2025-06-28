import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarIcon from "@mui/icons-material/Star";
import CardMediaContainer from "../CardMediaContainer";
import ResponsiveView from "../ResponsiveView";
import { FC, useEffect, useState } from "react";

interface ItemCardProps {
  cardImage?: string;
  name: string;
  price: number | 0;
  brand?: string;
}

const defaultImg = "https://ik.imagekit.io/a1fr3d10/no_image.svg";

const ItemCard: FC<ItemCardProps> = ({
  cardImage = defaultImg,
  name,
  price,
  brand,
}) => {
  const [cardImg, setCardImg] = useState(cardImage);

  useEffect(() => {
    if (cardImage === defaultImg) {
      setCardImg(defaultImg);
      return;
    }
    const img = new window.Image();
    img.src = cardImg;
    img.onload = () => setCardImg(cardImg);
    img.onerror = () => setCardImg(defaultImg);
  }, [cardImage]);

  return (
    <Card className={"itemCard"} variant={"outlined"}>
      {/* Card Media */}
      <CardMediaContainer imageSrc={cardImg} />

      {/* Card Content */}
      <CardContent className={"contentData"}>
        <Typography className={"itemName"}>{name}</Typography>
        {price !== 0 && (
          <Typography className={"itemPrice"}>{`$${price}`}</Typography>
        )}

        {brand === "CUBIFood" && price === 0 && (
          <ResponsiveView
            desktop={<Chip className={"chipData"} label="9mins" />}
            mobile={
              <Chip
                className={"chipData"}
                size="small"
                sx={{ fontSize: 9 }}
                label="9mins"
              />
            }
          />
        )}

        {brand === "CUBIMart" && price === 0 && (
          <ResponsiveView
            desktop={
              <Typography className={"desktopFollowerData"}>
                99.9K followers
              </Typography>
            }
            mobile={
              <Typography className={"mobileFollowerData"}>
                <PeopleAltIcon
                  sx={{ fontSize: 14 }}
                  className={"peopleAltIcon"}
                />
                &nbsp; 99.9K
              </Typography>
            }
          />
        )}

        {brand === "CUBIMart" && (
          <ResponsiveView
            desktop={
              <Rating defaultValue={5} className={"desktopRatingView"} />
            }
            mobile={
              <Typography className={"mobileRatingView"}>
                <StarIcon sx={{ fontSize: 14 }} className={"starIcon"} />
                &nbsp;<span className={"ratingScore"}>5</span>
                &nbsp;{price !== 0 ? "• 99 sold" : "• 99 items"}
              </Typography>
            }
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
