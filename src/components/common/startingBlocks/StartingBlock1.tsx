import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ResponsiveView from "../ResponsiveView";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC, ReactNode, useEffect, useState } from "react";

interface StartingBlock1Props {
  bgImage?: string;
  bgPosition?: string;
  overlay?: string;
  titleFontSize?: number;
  textDivider?: number;
  subtitleFontSize?: number;
  title?: ReactNode;
  subtitle?: ReactNode;
}

const defaultBg = "https://ik.imagekit.io/a1fr3d10/default_bg.png";

const StartingBlock1: FC<StartingBlock1Props> = ({
  bgImage = defaultBg,
  bgPosition = "center",
  overlay = "#00000059",
  titleFontSize,
  textDivider,
  subtitleFontSize,
  title,
  subtitle,
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
    "--overlay": overlay || "#00000059",
    ...(titleFontSize && { "--titleFontSize": `${titleFontSize}px` }),
    ...(textDivider && { "--textDivider": `${textDivider}px` }),
    ...(subtitleFontSize && { "--subtitleFontSize": `${subtitleFontSize}px` }),
  } as CSSProperties;

  return (
    <Box className={commonStyles.startingBlock1} sx={style}>
      <Typography className={commonStyles.text} component={"div"}>
        <ResponsiveView
          desktop={<span className={commonStyles.desktopTitle}>{title}</span>}
          mobile={
            <span>
              <span className={commonStyles.mobileTitle}>{title}</span>
              <br />
              {textDivider !== 0 && (
                <span className={commonStyles.mobileTextDivider}>━━━</span>
              )}
              <br />
              <span className={commonStyles.mobileSubtitle}>{subtitle}</span>
            </span>
          }
        />
      </Typography>
    </Box>
  );
};

export default StartingBlock1;
