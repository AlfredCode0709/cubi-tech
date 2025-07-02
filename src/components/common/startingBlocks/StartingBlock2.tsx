import Box from "@mui/material/Box";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC, useEffect, useState } from "react";

interface StartingBlock2Props {
  bgImage?: string;
  bgPosition?: string;
}

const defaultBg = "https://ik.imagekit.io/a1fr3d10/default_bg.png";

const StartingBlock2: FC<StartingBlock2Props> = ({
  bgImage = defaultBg,
  bgPosition = "center",
}) => {
  const [bgImg, setBgImg] = useState(bgImage);

  useEffect(() => {
    if (bgImage === defaultBg) {
      setBgImg(defaultBg);
      return;
    }
    const img = new window.Image();
    img.src = bgImage;
    img.onload = () => setBgImg(bgImage);
    img.onerror = () => setBgImg(defaultBg);
  }, [bgImage]);

  const style: CSSProperties = {
    "--bgImage": `url(${bgImg})`,
    "--bgPosition": bgPosition || "center",
  } as CSSProperties;

  return <Box className={commonStyles.startingBlock2} sx={style} />;
};

export default StartingBlock2;
