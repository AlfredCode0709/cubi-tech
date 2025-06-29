import Fab from "@mui/material/Fab";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";

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
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
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
    </Zoom>
  );
};

export default ScrollTopFab;
