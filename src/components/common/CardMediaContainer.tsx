import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { FC } from "react";

interface CardMediaContainerProps {
  imageSrc: string;
}

const CardMediaContainer: FC<CardMediaContainerProps> = ({ imageSrc }) => {
  return (
    <Box className={"cardMediaContainer"}>
      <CardMedia
        className={"cardMedia"}
        component={"img"}
        image={imageSrc}
        alt={"Card Media"}
      />
    </Box>
  );
};

export default CardMediaContainer;
