import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../CardMediaContainer";
import { FC, useEffect, useState } from "react";

interface InfoCardProps {
  cardImage?: string;
  title?: string;
  descr?: string;
}

const defaultImg = "https://ik.imagekit.io/a1fr3d10/no_image.svg";

const InfoCard: FC<InfoCardProps> = ({
  cardImage = defaultImg,
  title,
  descr,
}) => {
  const [cardImg, setCardImg] = useState(cardImage);

  useEffect(() => {
    if (cardImage === defaultImg) {
      setCardImg(defaultImg);
      return;
    }
    const img = new window.Image();
    img.src = cardImage;
    img.onload = () => setCardImg(cardImage);
    img.onerror = () => setCardImg(defaultImg);
  }, [cardImage]);

  return (
    <Card className={"infoCard"} variant={"outlined"}>
      {/* Card Media */}
      <CardMediaContainer imageSrc={cardImg} />

      {/* Card Content */}
      <CardContent className={"contentData"}>
        <Typography className={"title"}>{title}</Typography>
        <Typography className={"descr"}>{descr}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
