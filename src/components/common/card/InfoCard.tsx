import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../CardMediaContainer";
import { CSSProperties, FC, useEffect, useState } from "react";

interface InfoCardProps {
  cardImage?: string;
  title?: string;
  descr?: string;
  isMain?: boolean;
  brand?: string;
  onViewClick?: () => void;
}

const defaultImg = "https://ik.imagekit.io/a1fr3d10/no_image.svg";

const InfoCard: FC<InfoCardProps> = ({
  cardImage = defaultImg,
  title,
  descr,
  isMain,
  brand,
  onViewClick,
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

  const style: CSSProperties = {
    "--treasureCardHeight": isMain ? "100%" : null,
    "--nameFontSize": isMain ? "20px" : "16px",
    "--descrFontSize": isMain ? "16px" : "14px",
  } as CSSProperties;

  return (
    <Card className={"infoCard"} variant={"outlined"} sx={style}>
      {/* Card Media */}
      <CardMediaContainer imageSrc={cardImg} />

      {/* Card Content */}
      <CardContent className={"contentData"}>
        <Typography
          className={brand === "CubiFood" ? "treasureTitle" : "title"}
        >
          {title}
        </Typography>
        <Typography
          className={brand === "CubiFood" ? "treasureDescr" : "descr"}
        >
          {descr}
        </Typography>
      </CardContent>

      {brand === "CubiFood" && (
        <CardActions sx={{ display: { xs: "none", md: "block" } }}>
          {!isMain && (
            <Button className={"viewTreasureButton"} onClick={onViewClick}>
              View
            </Button>
          )}
          <Button
            className={"learnTreasureButton"}
            size={isMain ? "large" : "medium"}
          >
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default InfoCard;
