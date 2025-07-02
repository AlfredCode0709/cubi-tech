import Fab from "@mui/material/Fab";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Zoom from "@mui/material/Zoom";
// import { styled } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { CSSProperties, FC } from "react";

// const FabStyled = styled(Fab)(({ theme }) => ({
//   position: "fixed",
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   zIndex: 1200,
// }));

interface ScrollTopFabProps {
  fabColor?: string;
}

const ScrollTopFab: FC<ScrollTopFabProps> = ({ fabColor }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const style: CSSProperties = {
    "--fabBgColor": fabColor || "var(--primary-main)",
  } as CSSProperties;

  return (
    <Zoom in={trigger}>
      <Fab
        className={"scrollTopFab"}
        aria-label="scroll back to top"
        onClick={handleClick}
        sx={style}
      >
        <ArrowDropUpIcon fontSize={"large"} />
      </Fab>
    </Zoom>
  );
};

export default ScrollTopFab;
