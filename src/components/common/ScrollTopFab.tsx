import Fab from "@mui/material/Fab";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { styled } from "@mui/material/styles";

const FabStyled = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1200,
}));

interface ScrollTopFabProps {
  fabColor?: string;
}

const ScrollTopFab = ({ fabColor }: ScrollTopFabProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FabStyled
      aria-label="scroll back to top"
      onClick={handleClick}
      sx={
        fabColor
          ? {
              bgcolor: fabColor,
              color: "#fff",
              "&:hover": { bgcolor: fabColor },
            }
          : {}
      }
    >
      <ArrowDropUpIcon fontSize={"large"} />
    </FabStyled>
  );
};

export default ScrollTopFab;
